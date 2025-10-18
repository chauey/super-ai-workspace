# Certification Test Feature

## Overview
A comprehensive certification practice test application built with Angular 20+ and NgRx SignalStore, following ABP Framework naming conventions.

## Features

### ✅ Test Navigation
- **Next/Previous Navigation**: Seamlessly move between questions
- **Question Navigator**: Visual grid showing all questions with status indicators
- **Jump to Question**: Click any question number to navigate directly
- **Auto-save Answers**: Answers are automatically saved when changing questions

### ✅ Hints & Help
- **Hint System**: Each question can have a hint that can be revealed
- **Show Answer**: Option to reveal the correct answer during practice
- **Expandable Hint Panel**: Hints shown in collapsible panel for better UX
- **Usage Tracking**: Tracks which questions had hints/answers revealed

### ✅ Mark for Review
- **Flag Questions**: Mark questions you're unsure about for later review
- **Review Counter**: Badge showing how many questions are marked
- **Review Section**: Dedicated section in results showing marked questions
- **Visual Indicators**: Flagged questions highlighted in navigator

### ✅ Timer System
- **Configurable Timer**: Tests can have time limits or be untimed
- **Real-time Countdown**: Live timer showing minutes:seconds remaining
- **Auto-submit**: Test automatically submits when time expires
- **Time Warning**: Visual warning when less than 5 minutes remain
- **Timer Storage**: Timer state persists in test attempt

### ✅ Multi-User Support
- **User Identification**: Auto-generated unique user ID per browser
- **Test History**: Complete history of all test attempts per user
- **Multiple Attempts**: Users can retake tests multiple times
- **Local Storage**: Data persisted in browser localStorage
- **ABP-Ready**: Structured for easy backend integration with ABP Framework

### ✅ Comprehensive Results
- **Score Display**: Large, clear score percentage
- **Pass/Fail Indicator**: Visual feedback on test outcome
- **Statistics**: Correct answers, passing score, time limit
- **Question-by-Question Review**: Detailed breakdown of all answers
- **Explanations**: Show correct answers with explanations
- **Performance Indicators**: Icons showing hint usage and answer reveals

### ✅ Modern UI/UX
- **Material Design**: Built with Angular Material components
- **Density System**: Responsive to app-wide density settings
- **Dark Mode**: Full support for light/dark themes
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Loading States**: Smooth transitions and loading indicators
- **Tooltips**: Helpful hints throughout the interface

## Technical Architecture

### State Management
```typescript
- **NgRx SignalStore**: Modern, reactive state management
- **Computed Signals**: Derived state (progress, time remaining, etc.)
- **patchState**: Immutable state updates
- **LocalStorage Integration**: Automatic persistence
```

### Data Models (ABP Framework Style)
```typescript
TestDto {
  Id: string
  Title: string
  Description: string
  Duration: number // minutes
  PassingScore: number // percentage
  Questions: TestQuestionDto[]
  Category: string
  HasTimer: boolean
}

TestQuestionDto {
  Id: string
  Question: string
  Options: string[]
  CorrectAnswer: number // index
  Explanation?: string
  Category?: string
  Hint?: string
}

TestAttemptDto {
  Id: string
  TestId: string
  UserId: string
  StartTime: Date
  EndTime?: Date
  TimeRemaining?: number // seconds
  Answers: { [questionId: string]: number }
  MarkedForReview: string[]
  Score?: number
  Passed?: boolean
  ShowAnswers: boolean
}

UserAnswerDto {
  QuestionId: string
  SelectedOption: number
  IsMarkedForReview?: boolean
  HintUsed?: boolean
  AnswerRevealed?: boolean
}

TestHistoryDto {
  UserId: string
  Attempts: TestAttemptDto[]
}
```

### Store Methods
```typescript
// Test Management
- loadTests(): Load available tests
- startTest(test): Initialize new test attempt
- resetTest(): Clear current test state

// Answer Management
- answerQuestion(answer): Save user's answer
- toggleMarkForReview(questionId): Flag/unflag question
- toggleHint(questionId): Show/hide hint
- revealAnswer(questionId): Show correct answer

// Test Completion
- submitTest(): Calculate score and save results
- saveAttemptToHistory(attempt): Persist to localStorage
```

### Component Features
```typescript
// Navigation
- nextQuestion(): Move to next question
- previousQuestion(): Move to previous question
- goToQuestion(index): Jump to specific question
- saveCurrentAnswer(): Auto-save current selection
- loadAnswer(): Restore saved answer when navigating

// UI Helpers
- isQuestionAnswered(id): Check if answered
- isQuestionMarkedForReview(id): Check if flagged
- isHintVisible(id): Check if hint is shown
- isAnswerRevealed(id): Check if answer is revealed
- getQuestionButtonColor(id, index): Navigator button styling
- scrollToQuestion(id): Smooth scroll in results view
```

## Usage

### Creating a Test
```typescript
export const myTest: TestDto = {
  Id: 'my-test-id',
  Title: 'My Certification Test',
  Description: 'Description of the test',
  Duration: 30, // 30 minutes
  PassingScore: 70, // 70%
  Category: 'Category Name',
  HasTimer: true, // Enable timer
  Questions: [
    {
      Id: 'q1',
      Question: 'What is...?',
      Options: ['Option A', 'Option B', 'Option C', 'Option D'],
      CorrectAnswer: 1, // Index 1 = Option B
      Explanation: 'Explanation of the answer...',
      Category: 'Subcategory',
      Hint: 'Think about...'
    }
    // ... more questions
  ]
};
```

### Adding Tests to Store
```typescript
// In test.store.ts
loadTests(): void {
  const tests = [
    azureFundamentalsTest,
    myTest,
    // ... more tests
  ];
  patchState(store, { availableTests: tests });
}
```

## Future Enhancements (Backend Integration)

### Planned for ABP Framework + Swagger
1. **API Integration**
   - RESTful endpoints for test CRUD operations
   - User authentication and authorization
   - Test attempt submission and retrieval
   - Progress tracking across devices

2. **Database Models**
   - Entity Framework Core entities
   - Audit logging
   - User management
   - Test assignment and scheduling

3. **Advanced Features**
   - Test analytics and reporting
   - Question bank management
   - Adaptive difficulty
   - Certification tracking
   - Proctoring features
   - Export results (PDF, Excel)

4. **Admin Features**
   - Test creation wizard
   - Question import/export
   - User management
   - Results dashboard
   - Custom branding

## File Structure
```
cert-test/
├── cert-test.component.ts      # Main component
├── cert-test.routes.ts          # Route configuration
├── models/
│   └── test.model.ts            # TypeScript interfaces (DTOs)
├── store/
│   └── test.store.ts            # NgRx SignalStore
├── data/
│   └── azure-fundamentals.data.ts  # Sample test data
└── README.md                    # This file
```

## Best Practices Used

1. **ABP Framework Naming**: PascalCase properties, DTO suffixes
2. **Standalone Components**: Modern Angular architecture
3. **SignalStore**: Lightweight, reactive state management
4. **Type Safety**: Full TypeScript typing throughout
5. **Immutability**: All state updates use patchState
6. **Computed Values**: Derived state using computed signals
7. **Clean Separation**: Models, Store, Components separated
8. **Accessibility**: ARIA labels, keyboard navigation, tooltips
9. **Responsive Design**: Mobile-first, adaptive layouts
10. **Performance**: OnPush change detection, lazy loading ready

## Development

### Adding New Features
1. Update models in `models/test.model.ts`
2. Add store methods in `store/test.store.ts`
3. Update component template and logic in `cert-test.component.ts`
4. Test with sample data in `data/*.data.ts`

### Testing
```bash
# Run development server
npm start

# Navigate to
http://localhost:4200/saas/cert-test

# Run tests
npm test
```

### Building for Production
```bash
npm run build:ng-test
```

## License
Part of the super-ai-workspace project

