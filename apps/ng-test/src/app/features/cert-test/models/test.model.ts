// ABP Framework Style DTOs with PascalCase properties

/**
 * Represents a skill or knowledge area tested
 */
export interface SkillDto {
  Id: string;
  Name: string;
  Description: string;
  Category?: string; // e.g., "Core Concepts", "Advanced", "Security"
  Weight?: number; // Importance weight (1-10)
}

/**
 * Links a question to specific skills it tests
 */
export interface QuestionSkillDto {
  QuestionId: string;
  SkillId: string;
  Proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert'; // Level required
}

/**
 * Individual test question
 */
export interface TestQuestionDto {
  Id: string;
  Question: string;
  Options: string[];
  CorrectAnswer: number | number[]; // index of correct option(s) - single number for single choice, array for multiple choice
  AllowMultipleSelection?: boolean; // Whether this question allows multiple answers
  Explanation?: string;
  Category?: string;
  Hint?: string;
  SkillIds: string[]; // Skills this question tests
  DifficultyLevel: 'Easy' | 'Medium' | 'Hard';
  EstimatedTimeSeconds?: number; // Estimated time to answer
  Points?: number; // Point value (default 1)
  ImageUrl?: string; // Optional image for question
  CodeSnippet?: string; // Optional code snippet
}

/**
 * Test version - allows tests to be updated over time
 */
export interface TestVersionDto {
  Id: string;
  TestId: string;
  Version: string; // e.g., "1.0", "1.1", "2.0"
  VersionDate: Date;
  ChangeLog?: string; // What changed in this version
  IsActive: boolean; // Is this the current active version
  IsDeprecated: boolean;
}

/**
 * Test outline section - organizes test content hierarchically
 */
export interface TestOutlineSectionDto {
  Id: string;
  Title: string;
  Description: string;
  Order: number;
  ParentSectionId?: string; // For nested sections
  ContentMarkdownUrl?: string; // Link to markdown content
  QuestionIds: string[]; // Questions in this section
  SkillIds: string[]; // Skills covered in this section
  EstimatedTimeMinutes?: number;
  Weight?: number; // Percentage weight of this section (e.g., 20%)
}

/**
 * Question ordering configuration
 */
export interface QuestionOrderingDto {
  Type: 'Outline' | 'Random' | 'Stored' | 'Manual';
  ManualOrder?: string[]; // For manual ordering: array of question IDs
}

/**
 * Main test definition
 */
export interface TestDto {
  Id: string;
  Title: string;
  Description: string;
  Duration: number; // in minutes (0 = no time limit)
  PassingScore: number; // percentage
  Questions: TestQuestionDto[];
  Category: string;
  HasTimer: boolean;
  Skills: SkillDto[]; // Skills/knowledge areas covered
  Version: string; // Current version (e.g., "1.0")
  VersionId: string; // Link to TestVersionDto
  TotalPoints?: number; // Total points available
  AllowPause: boolean; // Can test be paused
  AllowReview: boolean; // Can review answers before submit
  RandomizeQuestions: boolean; // Randomize question order (legacy - use QuestionOrdering)
  RandomizeOptions: boolean; // Randomize option order
  ShowResultsImmediately: boolean; // Show results right after submit
  CertificationLevel?: string; // e.g., "Fundamentals", "Associate", "Expert"
  Prerequisites?: string[]; // Test IDs that should be passed first
  Tags?: string[]; // Searchable tags
  IsFree: boolean; // Free or paid test
  Price?: number; // Price if paid (USD)
  Currency?: string; // Currency code (e.g., "USD", "EUR")
  Outline: TestOutlineSectionDto[]; // Hierarchical test structure
  QuestionOrdering: QuestionOrderingDto; // How questions are ordered
  AvailableVersions?: TestVersionDto[]; // All versions of this test
}

/**
 * Test pause/resume tracking
 */
export interface TestPauseDto {
  Id: string;
  AttemptId: string;
  PauseStartTime: Date;
  ResumeTime?: Date;
  TimeElapsedBeforePause: number; // seconds
  Reason?: string; // Optional reason for pause
}

/**
 * Test attempt - single instance of taking a test
 */
export interface TestAttemptDto {
  Id: string;
  TestId: string;
  TestVersionId: string; // Which version was taken
  UserId: string;
  StartTime: Date;
  EndTime?: Date;
  TimeRemaining?: number; // Seconds remaining
  TotalTimePaused?: number; // Total seconds paused
  Answers: { [questionId: string]: number | number[] };
  MarkedForReview: string[];
  Score?: number; // Percentage score
  PointsEarned?: number; // Raw points earned
  TotalPoints?: number; // Total points possible
  Passed?: boolean;
  ShowAnswers: boolean;
  IsPaused: boolean; // Currently paused
  PauseHistory: TestPauseDto[]; // All pause/resume events
  SkillScores?: { [skillId: string]: number }; // Score per skill
  Status: 'InProgress' | 'Completed' | 'Abandoned' | 'TimedOut' | 'Paused';
  CompletionPercentage?: number; // % of questions answered
  AttemptNumber?: number; // Which attempt is this (1st, 2nd, etc.)
}

/**
 * User answer to a question
 */
export interface UserAnswerDto {
  QuestionId: string;
  SelectedOption: number | number[]; // Single option index or array of selected option indices
  IsMarkedForReview?: boolean;
  HintUsed?: boolean;
  AnswerRevealed?: boolean;
  TimeSpentSeconds?: number; // Time spent on this question
  IsCorrect?: boolean; // Computed after submission
  PointsEarned?: number; // Points earned for this question
  AnsweredAt?: Date; // When answered
  ChangedCount?: number; // How many times answer changed
}

/**
 * Test history for a user
 */
export interface TestHistoryDto {
  UserId: string;
  Attempts: TestAttemptDto[];
}

/**
 * Skill performance summary
 */
export interface SkillPerformanceDto {
  SkillId: string;
  SkillName: string;
  TotalQuestions: number;
  CorrectAnswers: number;
  ScorePercentage: number;
  Proficiency: 'Beginner' | 'Developing' | 'Proficient' | 'Advanced';
  LastAssessed?: Date;
}

/**
 * User test statistics
 */
export interface UserTestStatsDto {
  UserId: string;
  TestId: string;
  TotalAttempts: number;
  PassedAttempts: number;
  FailedAttempts: number;
  HighestScore: number;
  LowestScore: number;
  AverageScore: number;
  LastAttemptDate?: Date;
  BestAttemptId?: string;
  SkillPerformance: SkillPerformanceDto[];
  TotalTimeSpent: number; // Total minutes across all attempts
  AverageTimePerAttempt: number; // Average minutes
}

/**
 * Filter for querying test history
 */
export interface TestHistoryFilterDto {
  UserId?: string;
  TestId?: string;
  TestVersionId?: string;
  Status?: ('InProgress' | 'Completed' | 'Abandoned' | 'TimedOut' | 'Paused')[];
  Passed?: boolean;
  DateFrom?: Date;
  DateTo?: Date;
  MinScore?: number;
  MaxScore?: number;
  SkillId?: string; // Filter by specific skill
  IsFree?: boolean; // Filter by free/paid
  PageNumber?: number;
  PageSize?: number;
  SortBy?: 'StartTime' | 'Score' | 'Duration' | 'AttemptNumber';
  SortDescending?: boolean;
}

/**
 * Filter for questions within a test
 */
export interface QuestionFilterDto {
  ShowMarkedForReview?: boolean; // Only marked questions
  ShowIncorrect?: boolean; // Only incorrect answers
  ShowUnanswered?: boolean; // Only unanswered
  ShowCorrect?: boolean; // Only correct answers
  SectionId?: string; // Filter by outline section
  SkillId?: string; // Filter by skill
  DifficultyLevel?: ('Easy' | 'Medium' | 'Hard')[];
}

/**
 * Sort options for questions
 */
export interface QuestionSortDto {
  SortBy: 'OutlineOrder' | 'Difficulty' | 'TimeSpent' | 'Marked' | 'Correctness';
  SortDescending?: boolean;
}

