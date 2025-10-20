import { signalStore, withState, withMethods, withComputed, withHooks, patchState } from '@ngrx/signals';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { TestDto, TestAttemptDto, UserAnswerDto, TestHistoryDto, TestPauseDto, SkillPerformanceDto } from '../models/test.model';
import { azureFundamentalsTest, azureAdministratorTest } from '../data/azure-fundamentals.data';
import { angular20Test } from '../data/angular-20.data';

interface TestState {
  availableTests: TestDto[];
  currentTest: TestDto | null;
  currentAttempt: TestAttemptDto | null;
  userAnswers: UserAnswerDto[];
  currentUserId: string; // Current user (generated if not exists)
  testHistory: TestHistoryDto[]; // All users' test history
  isTestActive: boolean;
  showResults: boolean;
  loading: boolean;
  error: string | null;
  timerInterval: any | null; // Timer reference
}

const STORAGE_KEY = 'cert-test-history';
const USER_ID_KEY = 'cert-test-user-id';

// Helper functions for localStorage
function loadFromStorage(): TestHistoryDto[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveToStorage(history: TestHistoryDto[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

function getCurrentUserId(): string {
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = `user-${Date.now()}`;
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
}

export const CertTestStore = signalStore(
  { providedIn: 'root' },
  withState<TestState>({
    availableTests: [],
    currentTest: null,
    currentAttempt: null,
    userAnswers: [],
    currentUserId: getCurrentUserId(),
    testHistory: loadFromStorage(),
    isTestActive: false,
    showResults: false,
    loading: false,
    error: null,
    timerInterval: null
  }),
  withComputed((store) => ({
    testProgress: computed(() => {
      const test = store.currentTest();
      const answers = store.userAnswers();
      if (!test) return 0;
      return (answers.length / test.questions.length) * 100;
    }),
    markedForReviewCount: computed(() => {
      const attempt = store.currentAttempt();
      return attempt?.markedForReview?.length || 0;
    }),
    timeRemainingFormatted: computed(() => {
      const attempt = store.currentAttempt();
      if (!attempt?.timeRemaining) return '00:00';
      const minutes = Math.floor(attempt.timeRemaining / 60);
      const seconds = attempt.timeRemaining % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }),
    userTestHistory: computed(() => {
      const userId = store.currentUserId();
      const history = store.testHistory();
      return history.find(h => h.userId === userId);
    })
  })),
  withMethods((store) => {
    // Internal function for auto-submit
    const internalSubmitTest = () => {
      const test = store.currentTest();
      const answers = store.userAnswers();
      const attempt = store.currentAttempt();

      if (!test || !attempt) return;

      // Clear timer
      const interval = store.timerInterval();
      if (interval) {
        clearInterval(interval);
        patchState(store, { timerInterval: null });
      }

      patchState(store, { loading: true });

      // Calculate score
      let correctAnswers = 0;
      answers.forEach(answer => {
        const question = test.questions.find(q => q.id === answer.questionId);
        if (question) {
          if (question.allowMultipleSelection) {
            // For multiple choice questions, check if all correct answers are selected
            const correctAnswersArray = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
            const selectedAnswersArray = Array.isArray(answer.selectedOption) ? answer.selectedOption : [answer.selectedOption];

            // Check if the arrays contain the same elements (order doesn't matter)
            const correctSet = new Set(correctAnswersArray.sort());
            const selectedSet = new Set(selectedAnswersArray.sort());

            if (correctSet.size === selectedSet.size &&
                [...correctSet].every(val => selectedSet.has(val))) {
              correctAnswers++;
            }
          } else {
            // For single choice questions
            if (question.correctAnswer === answer.selectedOption) {
              correctAnswers++;
            }
          }
        }
      });

      const score = (correctAnswers / test.questions.length) * 100;
      const passed = score >= test.passingScore;

      // Calculate skill scores
      const skillScores: { [skillid: string]: number } = {};
      test.skills.forEach(skill => {
        const skillQuestions = test.questions.filter(q => q.skillIds.includes(skill.id));
        const correctSkillAnswers = skillQuestions.filter(q => {
          const userAnswer = answers.find(a => a.questionId === q.id);
          if (!userAnswer) return false;

          if (q.allowMultipleSelection) {
            // For multiple choice questions
            const correctAnswersArray = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
            const selectedAnswersArray = Array.isArray(userAnswer.selectedOption) ? userAnswer.selectedOption : [userAnswer.selectedOption];

            const correctSet = new Set(correctAnswersArray.sort());
            const selectedSet = new Set(selectedAnswersArray.sort());

            return correctSet.size === selectedSet.size &&
                   [...correctSet].every(val => selectedSet.has(val));
          } else {
            // For single choice questions
            return q.correctAnswer === userAnswer.selectedOption;
          }
        }).length;

        if (skillQuestions.length > 0) {
          skillScores[skill.id] = (correctSkillAnswers / skillQuestions.length) * 100;
        }
      });

      // Calculate points earned
      let pointsEarned = 0;
      test.questions.forEach(question => {
        const userAnswer = answers.find(a => a.questionId === question.id);
        if (userAnswer) {
          let isCorrect = false;

          if (question.allowMultipleSelection) {
            // For multiple choice questions
            const correctAnswersArray = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
            const selectedAnswersArray = Array.isArray(userAnswer.selectedOption) ? userAnswer.selectedOption : [userAnswer.selectedOption];

            const correctSet = new Set(correctAnswersArray.sort());
            const selectedSet = new Set(selectedAnswersArray.sort());

            isCorrect = correctSet.size === selectedSet.size &&
                       [...correctSet].every(val => selectedSet.has(val));
          } else {
            // For single choice questions
            isCorrect = question.correctAnswer === userAnswer.selectedOption;
          }

          if (isCorrect) {
            pointsEarned += question.points || 1;
          }
        }
      });

      // Update attempt
      const updatedAttempt: TestAttemptDto = {
        ...attempt,
        endTime: new Date(),
        score: score,
        passed: passed,
        timeRemaining: 0,
        status: 'Completed',
        pointsEarned: pointsEarned,
        totalPoints: test.totalPoints || test.questions.length,
        skillScores: skillScores,
        completionPercentage: 100
      };

      // Save to history
      const history = store.testHistory();
      const userId = store.currentUserId();

      const userHistoryIndex = history.findIndex(h => h.userId === userId);

      if (userHistoryIndex >= 0) {
        const updatedHistory = [...history];
        updatedHistory[userHistoryIndex] = {
          ...updatedHistory[userHistoryIndex],
          attempts: [...updatedHistory[userHistoryIndex].attempts, updatedAttempt]
        };
        patchState(store, { testHistory: updatedHistory });
        saveToStorage(updatedHistory);
      } else {
        const newUserHistory: TestHistoryDto = {
          userId: userId,
          attempts: [updatedAttempt]
        };
        const updatedHistory = [...history, newUserHistory];
        patchState(store, { testHistory: updatedHistory });
        saveToStorage(updatedHistory);
      }

      patchState(store, {
        currentAttempt: updatedAttempt,
        isTestActive: false,
        showResults: true,
        loading: false
      });
    };

    return {
      // Load available tests
      loadTests(): void {
        console.log('CertTestStore: Loading tests...');
        patchState(store, { loading: true, error: null });

        try {
          // In a real app, this would be an HTTP call
          const tests = [azureFundamentalsTest, azureAdministratorTest, angular20Test];
          console.log('CertTestStore: Tests loaded:', tests.length);
          patchState(store, { availableTests: tests, loading: false });
        } catch (error) {
          console.error('CertTestStore: Error loading tests:', error);
          patchState(store, {
            error: error instanceof Error ? error.message : 'Failed to load tests',
            loading: false
          });
        }
      },

      // Start a test
      startTest(test: TestDto): void {
        const userId = store.currentUserId();
        const timeInSeconds = test.hasTimer ? test.duration * 60 : 0;
        const history = store.testHistory();
        const userHistory = history.find(h => h.userId === userId);
        const attemptNumber = userHistory
          ? userHistory.attempts.filter(a => a.testId === test.id).length + 1
          : 1;

        const attempt: TestAttemptDto = {
          id: `attempt-${Date.now()}`,
          testId: test.id,
          testVersionId: test.versionId,
          userId: userId,
          startTime: new Date(),
          timeRemaining: timeInSeconds,
          totalTimePaused: 0,
          answers: {},
          markedForReview: [],
          showAnswers: false,
          isPaused: false,
          pauseHistory: [],
          status: 'InProgress',
          completionPercentage: 0,
          attemptNumber: attemptNumber,
          totalPoints: test.totalPoints || test.questions.length,
          skillScores: {}
        };

        // Clear any existing timer
        const interval = store.timerInterval();
        if (interval) {
          clearInterval(interval);
        }

        patchState(store, {
          currentTest: test,
          currentAttempt: attempt,
          userAnswers: [],
          isTestActive: true,
          showResults: false,
          timerInterval: null
        });

        // Start timer if test has time limit
        if (test.hasTimer && timeInSeconds > 0) {
          const newInterval = setInterval(() => {
            const currentAttempt = store.currentAttempt();
            if (currentAttempt && currentAttempt.timeRemaining && currentAttempt.timeRemaining > 0) {
              const updatedAttempt = {
                ...currentAttempt,
                timeRemaining: currentAttempt.timeRemaining - 1
              };
              patchState(store, { currentAttempt: updatedAttempt });

              // Auto-submit when time runs out
              if (updatedAttempt.timeRemaining === 0) {
                internalSubmitTest();
              }
            }
          }, 1000);

          patchState(store, { timerInterval: newInterval });
        }
      },

    // Answer a question
    answerQuestion(answer: UserAnswerDto): void {
      const currentAnswers = store.userAnswers();
      const existingIndex = currentAnswers.findIndex(
        a => a.questionId === answer.questionId
      );

      const updatedAnswers = existingIndex >= 0
        ? currentAnswers.map((a, i) => i === existingIndex ? answer : a)
        : [...currentAnswers, answer];

      patchState(store, { userAnswers: updatedAnswers });
    },

    // Toggle mark for review
    toggleMarkForReview(questionId: string): void {
      const attempt = store.currentAttempt();
      if (!attempt) return;

      const marked = attempt.markedForReview || [];
      const isMarked = marked.includes(questionId);

      const updatedMarked = isMarked
        ? marked.filter(id => id !== questionId)
        : [...marked, questionId];

      patchState(store, {
        currentAttempt: { ...attempt, markedForReview: updatedMarked }
      });
    },

    // Pause test
    pauseTest(): void {
      const attempt = store.currentAttempt();
      const test = store.currentTest();
      if (!attempt || !test || !test.allowPause) return;

      // Clear timer
      const interval = store.timerInterval();
      if (interval) {
        clearInterval(interval);
        patchState(store, { timerInterval: null });
      }

      const pauseRecord: TestPauseDto = {
        id: `pause-${Date.now()}`,
        attemptId: attempt.id,
        pauseStartTime: new Date(),
        timeElapsedBeforePause: (test.duration * 60) - (attempt.timeRemaining || 0)
      };

      const updatedAttempt: TestAttemptDto = {
        ...attempt,
        isPaused: true,
        status: 'Paused',
        pauseHistory: [...attempt.pauseHistory, pauseRecord]
      };

      patchState(store, { currentAttempt: updatedAttempt });
    },

    // Resume test
    resumeTest(): void {
      const attempt = store.currentAttempt();
      const test = store.currentTest();
      if (!attempt || !test || !attempt.isPaused) return;

      const lastPause = attempt.pauseHistory[attempt.pauseHistory.length - 1];
      if (!lastPause) return;

      const now = new Date();
      const pauseDuration = Math.floor((now.getTime() - new Date(lastPause.pauseStartTime).getTime()) / 1000);

      // Update pause record
      const updatedPauseRecord: TestPauseDto = {
        ...lastPause,
        resumeTime: now
      };

      const updatedPauseHistory = [...attempt.pauseHistory];
      updatedPauseHistory[updatedPauseHistory.length - 1] = updatedPauseRecord;

      const updatedAttempt: TestAttemptDto = {
        ...attempt,
        isPaused: false,
        status: 'InProgress',
        totalTimePaused: (attempt.totalTimePaused || 0) + pauseDuration,
        pauseHistory: updatedPauseHistory
      };

      patchState(store, { currentAttempt: updatedAttempt });

      // Restart timer if test has timer
      if (test.hasTimer && updatedAttempt.timeRemaining && updatedAttempt.timeRemaining > 0) {
        const newInterval = setInterval(() => {
          const currentAttempt = store.currentAttempt();
          if (currentAttempt && currentAttempt.timeRemaining && currentAttempt.timeRemaining > 0 && !currentAttempt.isPaused) {
            const updated = {
              ...currentAttempt,
              timeRemaining: currentAttempt.timeRemaining - 1
            };
            patchState(store, { currentAttempt: updated });

            // Auto-submit when time runs out
            if (updated.timeRemaining === 0) {
              internalSubmitTest();
            }
          }
        }, 1000);

        patchState(store, { timerInterval: newInterval });
      }
    },

    // Toggle hint for a question
    toggleHint(questionId: string): void {
      const currentAnswers = store.userAnswers();
      const answer = currentAnswers.find(a => a.questionId === questionId);

      if (answer) {
        const updatedAnswers = currentAnswers.map(a =>
          a.questionId === questionId ? { ...a, hintUsed: !a.hintUsed } : a
        );
        patchState(store, { userAnswers: updatedAnswers });
      } else {
        // Create answer entry with hint used
        const newAnswer: UserAnswerDto = {
          questionId: questionId,
          selectedOption: -1,
          hintUsed: true
        };
        patchState(store, { userAnswers: [...currentAnswers, newAnswer] });
      }
    },

    // Reveal answer for a question
    revealAnswer(questionId: string): void {
      const currentAnswers = store.userAnswers();
      const answer = currentAnswers.find(a => a.questionId === questionId);

      if (answer) {
        const updatedAnswers = currentAnswers.map(a =>
          a.questionId === questionId ? { ...a, answerRevealed: true } : a
        );
        patchState(store, { userAnswers: updatedAnswers });
      } else {
        // Create answer entry with answer revealed
        const newAnswer: UserAnswerDto = {
          questionId: questionId,
          selectedOption: -1,
          answerRevealed: true
        };
        patchState(store, { userAnswers: [...currentAnswers, newAnswer] });
      }
    },

    // Submit test and calculate score
    submitTest(): void {
      internalSubmitTest();
    },

    // Reset test
    resetTest(): void {
      const interval = store.timerInterval();
      if (interval) {
        clearInterval(interval);
      }

      patchState(store, {
        currentTest: null,
        currentAttempt: null,
        userAnswers: [],
        isTestActive: false,
        showResults: false,
        timerInterval: null
      });
    },

    // View/hide results
    viewResults(): void {
      patchState(store, { showResults: true });
    },

    hideResults(): void {
      patchState(store, { showResults: false });
    }
    };
  }),
  withHooks({
    onInit(store) {
      console.log('CertTestStore: Store initialized with withDevtools');
      // Auto-load tests on initialization
      store.loadTests();
    }
  }),
  withDevtools('CertTestStore')
);

