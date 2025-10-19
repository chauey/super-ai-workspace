import { signalStore, withState, withMethods, withComputed, withHooks, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';
import { TestDto, TestAttemptDto, UserAnswerDto, TestHistoryDto, TestPauseDto, SkillPerformanceDto } from '../models/test.model';
import { azureFundamentalsTest, azureAdministratorTest } from '../data/azure-fundamentals.data';

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
      return (answers.length / test.Questions.length) * 100;
    }),
    markedForReviewCount: computed(() => {
      const attempt = store.currentAttempt();
      return attempt?.MarkedForReview?.length || 0;
    }),
    timeRemainingFormatted: computed(() => {
      const attempt = store.currentAttempt();
      if (!attempt?.TimeRemaining) return '00:00';
      const minutes = Math.floor(attempt.TimeRemaining / 60);
      const seconds = attempt.TimeRemaining % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }),
    userTestHistory: computed(() => {
      const userId = store.currentUserId();
      const history = store.testHistory();
      return history.find(h => h.UserId === userId);
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
        const question = test.Questions.find(q => q.Id === answer.QuestionId);
        if (question && question.CorrectAnswer === answer.SelectedOption) {
          correctAnswers++;
        }
      });

      const score = (correctAnswers / test.Questions.length) * 100;
      const passed = score >= test.PassingScore;

      // Calculate skill scores
      const skillScores: { [skillId: string]: number } = {};
      test.Skills.forEach(skill => {
        const skillQuestions = test.Questions.filter(q => q.SkillIds.includes(skill.Id));
        const correctSkillAnswers = skillQuestions.filter(q => {
          const userAnswer = answers.find(a => a.QuestionId === q.Id);
          return userAnswer && q.CorrectAnswer === userAnswer.SelectedOption;
        }).length;

        if (skillQuestions.length > 0) {
          skillScores[skill.Id] = (correctSkillAnswers / skillQuestions.length) * 100;
        }
      });

      // Calculate points earned
      let pointsEarned = 0;
      test.Questions.forEach(question => {
        const userAnswer = answers.find(a => a.QuestionId === question.Id);
        if (userAnswer && question.CorrectAnswer === userAnswer.SelectedOption) {
          pointsEarned += question.Points || 1;
        }
      });

      // Update attempt
      const updatedAttempt: TestAttemptDto = {
        ...attempt,
        EndTime: new Date(),
        Score: score,
        Passed: passed,
        TimeRemaining: 0,
        Status: 'Completed',
        PointsEarned: pointsEarned,
        TotalPoints: test.TotalPoints || test.Questions.length,
        SkillScores: skillScores,
        CompletionPercentage: 100
      };

      // Save to history
      const history = store.testHistory();
      const userId = store.currentUserId();

      const userHistoryIndex = history.findIndex(h => h.UserId === userId);

      if (userHistoryIndex >= 0) {
        const updatedHistory = [...history];
        updatedHistory[userHistoryIndex] = {
          ...updatedHistory[userHistoryIndex],
          Attempts: [...updatedHistory[userHistoryIndex].Attempts, updatedAttempt]
        };
        patchState(store, { testHistory: updatedHistory });
        saveToStorage(updatedHistory);
      } else {
        const newUserHistory: TestHistoryDto = {
          UserId: userId,
          Attempts: [updatedAttempt]
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
        patchState(store, { loading: true, error: null });

        try {
          // In a real app, this would be an HTTP call
          const tests = [azureFundamentalsTest, azureAdministratorTest];
          patchState(store, { availableTests: tests, loading: false });
        } catch (error) {
          patchState(store, {
            error: error instanceof Error ? error.message : 'Failed to load tests',
            loading: false
          });
        }
      },

      // Start a test
      startTest(test: TestDto): void {
        const userId = store.currentUserId();
        const timeInSeconds = test.HasTimer ? test.Duration * 60 : 0;
        const history = store.testHistory();
        const userHistory = history.find(h => h.UserId === userId);
        const attemptNumber = userHistory
          ? userHistory.Attempts.filter(a => a.TestId === test.Id).length + 1
          : 1;

        const attempt: TestAttemptDto = {
          Id: `attempt-${Date.now()}`,
          TestId: test.Id,
          TestVersionId: test.VersionId,
          UserId: userId,
          StartTime: new Date(),
          TimeRemaining: timeInSeconds,
          TotalTimePaused: 0,
          Answers: {},
          MarkedForReview: [],
          ShowAnswers: false,
          IsPaused: false,
          PauseHistory: [],
          Status: 'InProgress',
          CompletionPercentage: 0,
          AttemptNumber: attemptNumber,
          TotalPoints: test.TotalPoints || test.Questions.length,
          SkillScores: {}
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
        if (test.HasTimer && timeInSeconds > 0) {
          const newInterval = setInterval(() => {
            const currentAttempt = store.currentAttempt();
            if (currentAttempt && currentAttempt.TimeRemaining && currentAttempt.TimeRemaining > 0) {
              const updatedAttempt = {
                ...currentAttempt,
                TimeRemaining: currentAttempt.TimeRemaining - 1
              };
              patchState(store, { currentAttempt: updatedAttempt });

              // Auto-submit when time runs out
              if (updatedAttempt.TimeRemaining === 0) {
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
        a => a.QuestionId === answer.QuestionId
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

      const marked = attempt.MarkedForReview || [];
      const isMarked = marked.includes(questionId);

      const updatedMarked = isMarked
        ? marked.filter(id => id !== questionId)
        : [...marked, questionId];

      patchState(store, {
        currentAttempt: { ...attempt, MarkedForReview: updatedMarked }
      });
    },

    // Pause test
    pauseTest(): void {
      const attempt = store.currentAttempt();
      const test = store.currentTest();
      if (!attempt || !test || !test.AllowPause) return;

      // Clear timer
      const interval = store.timerInterval();
      if (interval) {
        clearInterval(interval);
        patchState(store, { timerInterval: null });
      }

      const pauseRecord: TestPauseDto = {
        Id: `pause-${Date.now()}`,
        AttemptId: attempt.Id,
        PauseStartTime: new Date(),
        TimeElapsedBeforePause: (test.Duration * 60) - (attempt.TimeRemaining || 0)
      };

      const updatedAttempt: TestAttemptDto = {
        ...attempt,
        IsPaused: true,
        Status: 'Paused',
        PauseHistory: [...attempt.PauseHistory, pauseRecord]
      };

      patchState(store, { currentAttempt: updatedAttempt });
    },

    // Resume test
    resumeTest(): void {
      const attempt = store.currentAttempt();
      const test = store.currentTest();
      if (!attempt || !test || !attempt.IsPaused) return;

      const lastPause = attempt.PauseHistory[attempt.PauseHistory.length - 1];
      if (!lastPause) return;

      const now = new Date();
      const pauseDuration = Math.floor((now.getTime() - new Date(lastPause.PauseStartTime).getTime()) / 1000);

      // Update pause record
      const updatedPauseRecord: TestPauseDto = {
        ...lastPause,
        ResumeTime: now
      };

      const updatedPauseHistory = [...attempt.PauseHistory];
      updatedPauseHistory[updatedPauseHistory.length - 1] = updatedPauseRecord;

      const updatedAttempt: TestAttemptDto = {
        ...attempt,
        IsPaused: false,
        Status: 'InProgress',
        TotalTimePaused: (attempt.TotalTimePaused || 0) + pauseDuration,
        PauseHistory: updatedPauseHistory
      };

      patchState(store, { currentAttempt: updatedAttempt });

      // Restart timer if test has timer
      if (test.HasTimer && updatedAttempt.TimeRemaining && updatedAttempt.TimeRemaining > 0) {
        const newInterval = setInterval(() => {
          const currentAttempt = store.currentAttempt();
          if (currentAttempt && currentAttempt.TimeRemaining && currentAttempt.TimeRemaining > 0 && !currentAttempt.IsPaused) {
            const updated = {
              ...currentAttempt,
              TimeRemaining: currentAttempt.TimeRemaining - 1
            };
            patchState(store, { currentAttempt: updated });

            // Auto-submit when time runs out
            if (updated.TimeRemaining === 0) {
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
      const answer = currentAnswers.find(a => a.QuestionId === questionId);

      if (answer) {
        const updatedAnswers = currentAnswers.map(a =>
          a.QuestionId === questionId ? { ...a, HintUsed: !a.HintUsed } : a
        );
        patchState(store, { userAnswers: updatedAnswers });
      } else {
        // Create answer entry with hint used
        const newAnswer: UserAnswerDto = {
          QuestionId: questionId,
          SelectedOption: -1,
          HintUsed: true
        };
        patchState(store, { userAnswers: [...currentAnswers, newAnswer] });
      }
    },

    // Reveal answer for a question
    revealAnswer(questionId: string): void {
      const currentAnswers = store.userAnswers();
      const answer = currentAnswers.find(a => a.QuestionId === questionId);

      if (answer) {
        const updatedAnswers = currentAnswers.map(a =>
          a.QuestionId === questionId ? { ...a, AnswerRevealed: true } : a
        );
        patchState(store, { userAnswers: updatedAnswers });
      } else {
        // Create answer entry with answer revealed
        const newAnswer: UserAnswerDto = {
          QuestionId: questionId,
          SelectedOption: -1,
          AnswerRevealed: true
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
      // Auto-load tests on initialization
      store.loadTests();
    }
  })
);

