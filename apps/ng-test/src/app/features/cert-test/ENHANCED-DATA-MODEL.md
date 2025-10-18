# Enhanced Certification Test Data Model

## Overview
This document describes the comprehensive data model for the certification test feature, designed to be production-ready and fully compatible with ABP Framework, Swagger, and .NET backend integration.

## Key Features Added

### 1. **Skills/Knowledge Areas** 
Tests now track specific skills and knowledge domains being assessed.

```typescript
interface SkillDto {
  Id: string;
  Name: string;
  Description: string;
  Category?: string; // e.g., "Core Concepts", "Advanced"
  Weight?: number; // Importance (1-10)
}
```

**Benefits:**
- Track performance by skill area
- Identify strengths and weaknesses
- Provide targeted feedback
- Generate skill-based reports

### 2. **Test Versions**
Full version control for tests over time.

```typescript
interface TestVersionDto {
  Id: string;
  TestId: string;
  Version: string; // "1.0", "2.0", etc.
  VersionDate: Date;
  ChangeLog?: string;
  IsActive: boolean;
  IsDeprecated: boolean;
}
```

**Benefits:**
- Update tests without losing historical data
- Track which version each attempt used
- Maintain test integrity over time
- Support gradual test evolution

### 3. **Pause/Resume Functionality**
Tests can be paused and resumed, with full tracking.

```typescript
interface TestPauseDto {
  Id: string;
  AttemptId: string;
  PauseStartTime: Date;
  ResumeTime?: Date;
  TimeElapsedBeforePause: number;
  Reason?: string;
}
```

**Benefits:**
- Accommodate breaks during long tests
- Track pause patterns
- Prevent timer abuse
- Improve user experience

### 4. **Enhanced Test Attempts**
Comprehensive tracking of each test-taking instance.

```typescript
interface TestAttemptDto {
  Id: string;
  TestId: string;
  TestVersionId: string; // Links to specific version
  UserId: string;
  StartTime: Date;
  EndTime?: Date;
  TimeRemaining?: number;
  TotalTimePaused?: number;
  PauseHistory: TestPauseDto[];
  Score?: number; // Percentage
  PointsEarned?: number; // Raw points
  TotalPoints?: number;
  Passed?: boolean;
  IsPaused: boolean;
  Status: 'InProgress' | 'Completed' | 'Abandoned' | 'TimedOut' | 'Paused';
  SkillScores?: { [skillId: string]: number };
  CompletionPercentage?: number;
  AttemptNumber?: number; // 1st, 2nd, 3rd attempt
  MarkedForReview: string[];
  Answers: { [questionId: string]: number };
  ShowAnswers: boolean;
}
```

### 5. **Enhanced Questions**
Questions now link to skills and include metadata.

```typescript
interface TestQuestionDto {
  Id: string;
  Question: string;
  Options: string[];
  CorrectAnswer: number;
  Explanation?: string;
  Category?: string;
  Hint?: string;
  SkillIds: string[]; // Skills this tests
  DifficultyLevel: 'Easy' | 'Medium' | 'Hard';
  EstimatedTimeSeconds?: number;
  Points?: number;
  ImageUrl?: string;
  CodeSnippet?: string;
}
```

### 6. **Skill Performance Tracking**
Detailed performance metrics per skill.

```typescript
interface SkillPerformanceDto {
  SkillId: string;
  SkillName: string;
  TotalQuestions: number;
  CorrectAnswers: number;
  ScorePercentage: number;
  Proficiency: 'Beginner' | 'Developing' | 'Proficient' | 'Advanced';
  LastAssessed?: Date;
}
```

### 7. **User Statistics**
Comprehensive test statistics per user.

```typescript
interface UserTestStatsDto {
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
  TotalTimeSpent: number;
  AverageTimePerAttempt: number;
}
```

### 8. **Advanced Filtering**
Comprehensive query capabilities.

```typescript
interface TestHistoryFilterDto {
  UserId?: string;
  TestId?: string;
  TestVersionId?: string;
  Status?: ('InProgress' | 'Completed' | 'Abandoned' | 'TimedOut' | 'Paused')[];
  Passed?: boolean;
  DateFrom?: Date;
  DateTo?: Date;
  MinScore?: number;
  MaxScore?: number;
  SkillId?: string;
  PageNumber?: number;
  PageSize?: number;
  SortBy?: 'StartTime' | 'Score' | 'Duration';
  SortDescending?: boolean;
}
```

## Store Methods

### Test Management
- `loadTests()` - Load available tests
- `startTest(test)` - Initialize new attempt with version tracking
- `submitTest()` - Calculate scores, skill performance, and save
- `resetTest()` - Clear current state

### Pause/Resume
- `pauseTest()` - Pause test, stop timer, record pause
- `resumeTest()` - Resume test, restart timer, track pause duration

### Answer Management
- `answerQuestion(answer)` - Save user answer
- `toggleMarkForReview(questionId)` - Flag question
- `toggleHint(questionId)` - Show/hide hint
- `revealAnswer(questionId)` - Show correct answer

## Sample Test Data

The Azure Fundamentals test now includes:

**Skills Defined:**
1. Cloud Computing Concepts (Weight: 10)
2. Azure Core Services (Weight: 9)
3. Security and Compliance (Weight: 8)
4. Pricing and Support (Weight: 7)
5. Database Services (Weight: 7)

**Each Question Maps to Skills:**
- Q1: Cloud Concepts
- Q2: Azure Services + Database
- Q3: Security
- Q4: Pricing
- Q5: Pricing

**Test Configuration:**
```typescript
{
  Version: "1.0",
  VersionId: "az-900-v1.0",
  Skills: [...],
  AllowPause: true,
  AllowReview: true,
  CertificationLevel: "Fundamentals",
  RandomizeQuestions: false,
  ShowResultsImmediately: true,
  Tags: ['Azure', 'Cloud', 'Fundamentals']
}
```

## Backend Integration Roadmap

### Phase 1: Basic API (Current State - localStorage)
✅ All DTOs defined with ABP naming conventions (PascalCase)
✅ Comprehensive data model
✅ LocalStorage persistence
✅ Full feature functionality

### Phase 2: ABP Framework Integration
**User Management**
- `POST /api/app/auth/login` - User authentication
- `GET /api/app/user/profile` - Get user profile

**Test Management**
- `GET /api/app/test/all` - Get all available tests
- `GET /api/app/test/{id}` - Get specific test
- `GET /api/app/test/{id}/version/{versionId}` - Get specific version
- `POST /api/app/test` - Create new test (Admin)
- `PUT /api/app/test/{id}` - Update test (Admin)

**Attempt Management**
- `POST /api/app/test-attempt/start` - Start test attempt
- `PUT /api/app/test-attempt/{id}/pause` - Pause attempt
- `PUT /api/app/test-attempt/{id}/resume` - Resume attempt
- `PUT /api/app/test-attempt/{id}/answer` - Save answer
- `POST /api/app/test-attempt/{id}/submit` - Submit attempt
- `GET /api/app/test-attempt/{id}` - Get attempt details

**History & Statistics**
- `GET /api/app/test-attempt/history` - Get user history (with filters)
- `GET /api/app/test-attempt/statistics` - Get user statistics
- `GET /api/app/test-attempt/{id}/skill-performance` - Skill breakdown

**Admin/Reporting**
- `GET /api/app/test/{id}/analytics` - Test analytics
- `GET /api/app/skill/performance-report` - Skill performance report
- `GET /api/app/test-attempt/export` - Export attempts (CSV/Excel)

### Phase 3: Advanced Features
- Real-time attempt synchronization
- Proctoring integration
- Certificate generation
- Learning path recommendations
- Adaptive testing (difficulty adjustment)
- Question bank management
- Bulk test creation
- Analytics dashboard

## Database Schema (Entity Framework Core)

### Main Tables
```
Tests
TestVersions
TestQuestions
Skills
QuestionSkills
TestAttempts
TestPauses
UserAnswers
TestHistory
SkillPerformance
```

### Key Relationships
- Test 1:N TestVersions
- Test 1:N TestQuestions
- Test M:N Skills (through TestSkills)
- TestQuestion M:N Skills (through QuestionSkills)
- TestAttempt M:1 TestVersion
- TestAttempt 1:N TestPauses
- TestAttempt 1:N UserAnswers
- User 1:N TestAttempts

## Usage Examples

### Creating a Test with Skills
```typescript
const myTest: TestDto = {
  Id: 'test-123',
  Title: 'JavaScript Fundamentals',
  Version: '1.0',
  VersionId: 'js-fund-v1.0',
  Skills: [
    {
      Id: 'skill-syntax',
      Name: 'Syntax and Operators',
      Description: 'Understanding of basic JS syntax',
      Category: 'Core',
      Weight: 10
    }
  ],
  Questions: [
    {
      Id: 'q1',
      Question: 'What is a closure?',
      Options: [...],
      CorrectAnswer: 0,
      SkillIds: ['skill-syntax'],
      DifficultyLevel: 'Medium',
      Points: 2
    }
  ],
  AllowPause: true,
  HasTimer: true,
  Duration: 30
};
```

### Pausing a Test
```typescript
// In component
pauseTest() {
  this.store.pauseTest();
}

// Timer stops, pause is recorded
// User can leave and come back
```

### Viewing Skill Performance
```typescript
// After test submission
const attempt = currentAttempt();
if (attempt.SkillScores) {
  Object.entries(attempt.SkillScores).forEach(([skillId, score]) => {
    console.log(`${skillId}: ${score}%`);
  });
}
```

### Filtering History
```typescript
const filter: TestHistoryFilterDto = {
  UserId: 'user-123',
  TestId: 'az-900-sample',
  Passed: true,
  MinScore: 80,
  DateFrom: new Date('2025-01-01'),
  SortBy: 'Score',
  SortDescending: true
};

// Will be used with backend API
// GET /api/app/test-attempt/history?userId=user-123&testId=az-900-sample&passed=true...
```

## Benefits of This Model

### For Users
✅ Track progress across multiple attempts
✅ Identify skill gaps
✅ Pause tests for breaks
✅ View detailed performance analytics
✅ Historical data retention

### For Administrators
✅ Version control for tests
✅ Comprehensive analytics
✅ Skill-based reporting
✅ User performance tracking
✅ Test evolution over time

### For Developers
✅ ABP Framework ready
✅ Swagger documentation ready
✅ Type-safe with TypeScript
✅ Scalable architecture
✅ Easy backend integration

## Migration Path

1. ✅ **Current**: Full functionality with localStorage
2. **Next**: ABP Framework DTOs and controllers
3. **Then**: Entity Framework Core entities
4. **Finally**: Advanced features and analytics

All current code is forward-compatible with the planned backend!

