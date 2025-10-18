# Certification Test - Implementation Roadmap

## ✅ Completed Features

### Data Model Enhancements
- ✅ Skills & Knowledge Areas tracking
- ✅ Test Versioning system
- ✅ Pause/Resume functionality
- ✅ Enhanced test attempts with status tracking
- ✅ Skill performance calculation
- ✅ User statistics and analytics

### New Features - Just Implemented
- ✅ **Free/Paid Tests**: `IsFree`, `Price`, `Currency` fields
- ✅ **Test Outline**: Hierarchical structure via `TestOutlineSectionDto`
- ✅ **Question Ordering**: `QuestionOrderingDto` with Outline/Random/Stored/Manual options
- ✅ **Question Filters**: `QuestionFilterDto` for marked/wrong/correct filtering
- ✅ **Question Sorting**: `QuestionSortDto` for various sort options
- ✅ **Content Links**: Each outline section has `ContentMarkdownUrl`
- ✅ **Test Versions List**: `AvailableVersions` array in TestDto

## 🚧 In Progress / To Implement

### 1. Test List View (NEW)
**Location**: Create `test-list.component.ts`

**Features**:
```typescript
interface TestListView {
  - Display all available tests
  - Show free/paid badge
  - Filter by: free/paid, category, level
  - Sort by: name, popularity, price
  - Search by title/tags
  - Click → Navigate to Test Detail
}
```

**UI Components**:
- Mat-Card grid for test cards
- Chips for tags and pricing
- Badge for "FREE" / "$XX.XX"
- Icons for certification level

### 2. Test Detail/Outline View (NEW)
**Location**: Create `test-detail.component.ts`

**Features**:
```typescript
interface TestDetailView {
  - Show test metadata (title, description, duration)
  - Display hierarchical outline
    - Section name, description, estimated time
    - Number of questions per section
    - Skills covered per section
    - Link to markdown content (opens in modal/side panel)
  - List all available versions
    - Version number, date, changelog
    - "Take This Version" button
  - Show prerequisites
  - Display pricing info
  - "Start Test" button
}
```

**UI Components**:
- Mat-Expansion-Panel for outline sections
- Mat-List for versions
- Markdown viewer for content
- Breadcrumb navigation

### 3. Test History View (NEW)
**Location**: Create `test-history.component.ts`

**Features**:
```typescript
interface TestHistoryView {
  - List all test attempts for current user
  - Columns: Test Name, Version, Date, Score, Status, Duration
  - Filter by:
    - Test ID
    - Passed/Failed
    - Date range
    - Score range
    - Free/Paid
  - Sort by: Date, Score, Duration, Attempt Number
  - Actions per row:
    - View Details (show full results)
    - Retake Test
    - Delete Attempt (with confirmation)
  - Summary statistics at top
    - Total attempts
    - Average score
    - Pass rate
}
```

**UI Components**:
- Mat-Table with sorting/filtering
- Mat-Paginator
- Stat cards at top
- Delete confirmation dialog

### 4. Enhanced Test-Taking Experience

**Question Navigation with Filters**:
```typescript
interface QuestionNavigator {
  - Current filters applied (chips)
  - Toggle filters:
    - Show Marked for Review
    - Show Incorrect (during review)
    - Show Unanswered
    - Show by Section
  - Sort dropdown:
    - Outline Order (default)
    - By Difficulty
    - By Time Spent
    - By Marked Status
  - Question grid updates based on filters
}
```

**Hint Positioning**:
- Move hint button to bottom of question card
- Below "Show Answer" button
- Keeps main question area cleaner

### 5. Question Ordering Implementation

**In Store** (test.store.ts):
```typescript
getOrderedQuestions(test: TestDto): TestQuestionDto[] {
  switch(test.QuestionOrdering.Type) {
    case 'Outline':
      return this.orderByOutline(test);
    case 'Random':
      return this.shuffle(test.Questions);
    case 'Manual':
      return this.orderManually(test);
    case 'Stored':
    default:
      return test.Questions;
  }
}

private orderByOutline(test: TestDto): TestQuestionDto[] {
  const ordered: TestQuestionDto[] = [];
  // Sort sections by Order field
  const sortedSections = [...test.Outline].sort((a, b) => a.Order - b.Order);
  
  sortedSections.forEach(section => {
    section.QuestionIds.forEach(questionId => {
      const question = test.Questions.find(q => q.Id === questionId);
      if (question && !ordered.includes(question)) {
        ordered.push(question);
      }
    });
  });
  
  // Add any remaining questions not in outline
  test.Questions.forEach(q => {
    if (!ordered.includes(q)) {
      ordered.push(q);
    }
  });
  
  return ordered;
}
```

### 6. Delete Test Attempt

**In Store**:
```typescript
deleteAttempt(attemptId: string): void {
  const history = store.testHistory();
  const userId = store.currentUserId();
  
  const userHistory = history.find(h => h.UserId === userId);
  if (!userHistory) return;
  
  const updatedAttempts = userHistory.Attempts.filter(a => a.Id !== attemptId);
  const updatedHistory = history.map(h => 
    h.UserId === userId 
      ? { ...h, Attempts: updatedAttempts }
      : h
  );
  
  patchState(store, { testHistory: updatedHistory });
  saveToStorage(updatedHistory);
}
```

### 7. Content Viewer Component

**Location**: Create `content-viewer.component.ts`

**Features**:
- Fetch markdown from `ContentMarkdownUrl`
- Render with syntax highlighting
- Side-by-side view during test (optional)
- Link from outline section
- Link from question (if configured)

## File Structure

```
cert-test/
├── cert-test.component.ts           # Main test-taking component
├── test-list.component.ts           # NEW: Browse all tests
├── test-detail.component.ts         # NEW: Test outline & versions
├── test-history.component.ts        # NEW: User's test history
├── content-viewer.component.ts      # NEW: Markdown content viewer
├── cert-test.routes.ts              # Update with new routes
├── models/
│   └── test.model.ts                # ✅ Updated with new interfaces
├── store/
│   └── test.store.ts                # Add new methods
├── data/
│   ├── azure-fundamentals.data.ts   # ✅ Updated with outline
│   └── test-registry.ts             # NEW: All available tests
└── README.md
```

## Routes Structure

```typescript
export const certTestRoutes: Routes = [
  {
    path: '',
    component: TestListComponent  // Browse tests
  },
  {
    path: ':testId',
    component: TestDetailComponent  // Test outline & info
  },
  {
    path: ':testId/take',
    component: CertTestComponent  // Take the test
  },
  {
    path: 'history',
    component: TestHistoryComponent  // Test history
  },
  {
    path: 'history/:attemptId',
    component: CertTestComponent,  // Review attempt
    data: { reviewMode: true }
  }
];
```

## UI Flow

```
1. User navigates to /saas/cert-test
   ↓
2. Sees TestListComponent
   - Grid of available tests
   - Free/Paid badges
   - Click on test
   ↓
3. TestDetailComponent shows:
   - Test info
   - Outline (clickable sections → markdown content)
   - Versions list
   - "Start Test" button
   ↓
4. Click "Start Test"
   → Navigate to /saas/cert-test/:testId/take
   ↓
5. CertTestComponent (current component)
   - Take test
   - Questions ordered per configuration
   - Filter/sort questions
   - Pause/resume
   ↓
6. Submit test
   ↓
7. View results
   - Overall score
   - Skill breakdown
   - Question review (with filters)
   ↓
8. Navigate to History
   → /saas/cert-test/history
   ↓
9. TestHistoryComponent
   - All attempts
   - Filter/sort
   - Delete attempts
   - Retake tests
```

## Priority Implementation Order

### Phase 1: Core Navigation (HIGH)
1. ✅ Update data models
2. Create test-list.component
3. Create test-detail.component
4. Update routes
5. Implement question ordering by outline

### Phase 2: History & Management (HIGH)
1. Create test-history.component
2. Implement delete attempt
3. Add filtering/sorting in history
4. Add summary statistics

### Phase 3: Enhanced Test Experience (MEDIUM)
1. Implement question filtering during test
2. Implement question sorting during test
3. Move hint button position
4. Add content links to questions

### Phase 4: Content Viewer (LOW)
1. Create content-viewer component
2. Integrate markdown rendering
3. Add side-by-side view
4. Create sample markdown for all sections

### Phase 5: Polish (LOW)
1. Add animations
2. Improve mobile responsiveness
3. Add loading states
4. Add error handling
5. Add accessibility features

## Backend Integration Points

When ready for ABP/Swagger:

```typescript
// Test Management
GET /api/app/test/list → TestDto[]
GET /api/app/test/{id} → TestDto
GET /api/app/test/{id}/outline → TestOutlineSectionDto[]
GET /api/app/test/{id}/versions → TestVersionDto[]
GET /api/app/test/{id}/content/{sectionId} → Markdown string

// Test History
GET /api/app/test-attempt/history → TestAttemptDto[] (with filters)
GET /api/app/test-attempt/{id} → TestAttemptDto
DELETE /api/app/test-attempt/{id} → void
GET /api/app/test-attempt/statistics → UserTestStatsDto

// Content
GET /api/app/content/{path} → Markdown content
```

## Current Status

**Working**:
- ✅ All data models defined
- ✅ Sample test with outline
- ✅ Test-taking flow
- ✅ Pause/resume
- ✅ Skills tracking
- ✅ Version tracking
- ✅ LocalStorage persistence

**Next Steps**:
1. Create test-list.component (browse tests)
2. Create test-detail.component (show outline)
3. Create test-history.component (manage attempts)
4. Implement question ordering
5. Add filtering/sorting UI

**Estimated Time**:
- Phase 1: 4-6 hours
- Phase 2: 3-4 hours
- Phase 3: 2-3 hours
- Phase 4: 2-3 hours
- Phase 5: 4-6 hours
**Total: 15-22 hours**

All groundwork is complete - ready to build UI components!

