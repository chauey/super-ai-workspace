// DTOs with camelCase properties following JavaScript/TypeScript conventions

/**
 * Represents a skill or knowledge area tested
 */
export interface SkillDto {
  id: string;
  name: string;
  description: string;
  category?: string; // e.g., "Core Concepts", "Advanced", "Security"
  weight?: number; // Importance weight (1-10)
}

/**
 * Links a question to specific skills it tests
 */
export interface QuestionSkillDto {
  questionId: string;
  skillId: string;
  proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert'; // Level required
}

/**
 * Individual test question
 */
export interface TestQuestionDto {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | number[]; // index of correct option(s) - single number for single choice, array for multiple choice
  allowMultipleSelection?: boolean; // Whether this question allows multiple answers
  explanation?: string;
  category?: string;
  hint?: string;
  skillIds: string[]; // Skills this question tests
  difficultyLevel: 'Easy' | 'Medium' | 'Hard';
  estimatedTimeSeconds?: number; // Estimated time to answer
  points?: number; // Point value (default 1)
  imageUrl?: string; // Optional image for question
  codeSnippet?: string; // Optional code snippet
}

/**
 * Test version - allows tests to be updated over time
 */
export interface TestVersionDto {
  id: string;
  testId: string;
  version: string; // e.g., "1.0", "1.1", "2.0"
  versionDate: Date;
  changeLog?: string; // What changed in this version
  isActive: boolean; // Is this the current active version
  isDeprecated: boolean;
}

/**
 * Test outline section - organizes test content hierarchically
 */
export interface TestOutlineSectionDto {
  id: string;
  title: string;
  description: string;
  order: number;
  parentSectionId?: string; // For nested sections
  contentMarkdownUrl?: string; // Link to markdown content
  questionIds: string[]; // Questions in this section
  skillIds: string[]; // Skills covered in this section
  estimatedTimeMinutes?: number;
  weight?: number; // Percentage weight of this section (e.g., 20%)
}

/**
 * Question ordering configuration
 */
export interface QuestionOrderingDto {
  type: 'Outline' | 'Random' | 'Stored' | 'Manual';
  manualOrder?: string[]; // For manual ordering: array of question IDs
}

/**
 * Main test definition
 */
export interface TestDto {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes (0 = no time limit)
  passingScore: number; // percentage
  questions: TestQuestionDto[];
  category: string;
  hasTimer: boolean;
  skills: SkillDto[]; // Skills/knowledge areas covered
  version: string; // Current version (e.g., "1.0")
  versionId: string; // Link to TestVersionDto
  totalPoints?: number; // Total points available
  allowPause: boolean; // Can test be paused
  allowReview: boolean; // Can review answers before submit
  randomizeQuestions: boolean; // Randomize question order (legacy - use QuestionOrdering)
  randomizeOptions: boolean; // Randomize option order
  showResultsImmediately: boolean; // Show results right after submit
  certificationLevel?: string; // e.g., "Fundamentals", "Associate", "Expert"
  prerequisites?: string[]; // Test IDs that should be passed first
  tags?: string[]; // Searchable tags
  isFree: boolean; // Free or paid test
  price?: number; // Price if paid (USD)
  currency?: string; // Currency code (e.g., "USD", "EUR")
  outline: TestOutlineSectionDto[]; // Hierarchical test structure
  questionOrdering: QuestionOrderingDto; // How questions are ordered
  availableVersions?: TestVersionDto[]; // All versions of this test
}

/**
 * Test pause/resume tracking
 */
export interface TestPauseDto {
  id: string;
  attemptId: string;
  pauseStartTime: Date;
  resumeTime?: Date;
  timeElapsedBeforePause: number; // seconds
  reason?: string; // Optional reason for pause
}

/**
 * Test attempt - single instance of taking a test
 */
export interface TestAttemptDto {
  id: string;
  testId: string;
  testVersionId: string; // Which version was taken
  userId: string;
  startTime: Date;
  endTime?: Date;
  timeRemaining?: number; // Seconds remaining
  totalTimePaused?: number; // Total seconds paused
  answers: { [questionId: string]: number | number[] };
  markedForReview: string[];
  score?: number; // Percentage score
  pointsEarned?: number; // Raw points earned
  totalPoints?: number; // Total points possible
  passed?: boolean;
  showAnswers: boolean;
  isPaused: boolean; // Currently paused
  pauseHistory: TestPauseDto[]; // All pause/resume events
  skillScores?: { [skillId: string]: number }; // Score per skill
  status: 'InProgress' | 'Completed' | 'Abandoned' | 'TimedOut' | 'Paused';
  completionPercentage?: number; // % of questions answered
  attemptNumber?: number; // Which attempt is this (1st, 2nd, etc.)
}

/**
 * User answer to a question
 */
export interface UserAnswerDto {
  questionId: string;
  selectedOption: number | number[]; // Single option index or array of selected option indices
  isMarkedForReview?: boolean;
  hintUsed?: boolean;
  answerRevealed?: boolean;
  timeSpentSeconds?: number; // Time spent on this question
  isCorrect?: boolean; // Computed after submission
  pointsEarned?: number; // Points earned for this question
  answeredAt?: Date; // When answered
  changedCount?: number; // How many times answer changed
}

/**
 * Test history for a user
 */
export interface TestHistoryDto {
  userId: string;
  attempts: TestAttemptDto[];
}

/**
 * Skill performance summary
 */
export interface SkillPerformanceDto {
  skillId: string;
  skillName: string;
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  proficiency: 'Beginner' | 'Developing' | 'Proficient' | 'Advanced';
  lastAssessed?: Date;
}

/**
 * User test statistics
 */
export interface UserTestStatsDto {
  userId: string;
  testId: string;
  totalAttempts: number;
  passedAttempts: number;
  failedAttempts: number;
  highestScore: number;
  lowestScore: number;
  averageScore: number;
  lastAttemptDate?: Date;
  bestAttemptId?: string;
  skillPerformance: SkillPerformanceDto[];
  totalTimeSpent: number; // Total minutes across all attempts
  averageTimePerAttempt: number; // Average minutes
}

/**
 * Filter for querying test history
 */
export interface TestHistoryFilterDto {
  userId?: string;
  testId?: string;
  testVersionId?: string;
  status?: ('InProgress' | 'Completed' | 'Abandoned' | 'TimedOut' | 'Paused')[];
  passed?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
  minScore?: number;
  maxScore?: number;
  skillId?: string; // Filter by specific skill
  isFree?: boolean; // Filter by free/paid
  pageNumber?: number;
  pageSize?: number;
  sortBy?: 'StartTime' | 'Score' | 'Duration' | 'AttemptNumber';
  sortDescending?: boolean;
}

/**
 * Filter for questions within a test
 */
export interface QuestionFilterDto {
  showMarkedForReview?: boolean; // Only marked questions
  showIncorrect?: boolean; // Only incorrect answers
  showUnanswered?: boolean; // Only unanswered
  showCorrect?: boolean; // Only correct answers
  sectionId?: string; // Filter by outline section
  skillId?: string; // Filter by skill
  difficultyLevel?: ('Easy' | 'Medium' | 'Hard')[];
}

/**
 * Sort options for questions
 */
export interface QuestionSortDto {
  sortBy: 'OutlineOrder' | 'Difficulty' | 'TimeSpent' | 'Marked' | 'Correctness';
  sortDescending?: boolean;
}

