import { Component, inject, computed, signal, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

import { CertTestStore } from './store/test.store';
import { TestDto, UserAnswerDto } from './models/test.model';

@Component({
  selector: 'app-cert-test',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  template: `
    <div class="cert-test-container">
      <header class="cert-test-header">
        <div class="header-content">
          <mat-icon class="header-icon">quiz</mat-icon>
          <div class="header-text">
            <h1>Certification Test</h1>
            <p>Prepare for certifications and job interviews with practice tests</p>
          </div>
        </div>
      </header>

      <!-- Test Selection -->
      @if (!isTestActive() && !showResults()) {
        <div class="test-selection">
          <h2>Available Tests</h2>
          <div class="tests-grid">
            @for (test of availableTests(); track test.Id) {
              <mat-card class="test-card">
                <mat-card-header>
                  <mat-card-title>
                    <mat-icon>school</mat-icon>
                    {{ test.Title }}
                  </mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <p class="test-description">{{ test.Description }}</p>
                  <div class="test-meta">
                    @if (test.HasTimer) {
                      <mat-chip><mat-icon>timer</mat-icon> {{ test.Duration }} minutes</mat-chip>
                    } @else {
                      <mat-chip><mat-icon>all_inclusive</mat-icon> No time limit</mat-chip>
                    }
                    <mat-chip><mat-icon>assignment</mat-icon> {{ test.Questions.length }} questions</mat-chip>
                    <mat-chip><mat-icon>trending_up</mat-icon> Pass: {{ test.PassingScore }}%</mat-chip>
                  </div>
                </mat-card-content>
                <mat-card-actions>
                  <button mat-raised-button color="primary" (click)="startTest(test)">
                    <mat-icon>play_arrow</mat-icon>
                    Start Test
                  </button>
                </mat-card-actions>
              </mat-card>
            }
          </div>
        </div>
      }

      <!-- Active Test -->
      @if (isTestActive() && currentTest()) {
        <div class="active-test">
          <!-- Progress & Timer Bar -->
          <mat-card class="progress-card">
            <div class="progress-info">
              <div class="progress-left">
                <span>Question {{ currentQuestionIndex() + 1 }} of {{ currentTest()!.Questions.length }}</span>
                <mat-chip [matBadge]="markedForReviewCount()" [matBadgeHidden]="markedForReviewCount() === 0" matBadgeColor="warn">
                  <mat-icon>flag</mat-icon> Marked for Review
                </mat-chip>
              </div>
              <div class="progress-right">
                @if (currentTest()!.HasTimer && currentAttempt()?.TimeRemaining) {
                  <mat-chip [class.time-warning]="(currentAttempt()?.TimeRemaining || 0) < 300">
                    <mat-icon>timer</mat-icon>
                    {{ timeRemainingFormatted() }}
                  </mat-chip>
                }
                <span>{{ testProgress() | number:'1.0-0' }}% Complete</span>
              </div>
            </div>
            <mat-progress-bar mode="determinate" [value]="testProgress()"></mat-progress-bar>
          </mat-card>

          <!-- Question -->
          <mat-card class="question-card">
            <mat-card-content>
              <div class="question-header">
                <mat-chip class="category-chip">{{ currentQuestion()?.Category }}</mat-chip>
                <span class="question-number">Question {{ currentQuestionIndex() + 1 }}</span>
                <button
                  mat-icon-button
                  [color]="isQuestionMarkedForReview(currentQuestion()?.Id || '') ? 'warn' : 'default'"
                  (click)="toggleMarkForReview(currentQuestion()?.Id || '')"
                  matTooltip="Mark for review">
                  <mat-icon>{{ isQuestionMarkedForReview(currentQuestion()?.Id || '') ? 'flag' : 'flag_outlined' }}</mat-icon>
                </button>
              </div>

              <h3 class="question-text">{{ currentQuestion()?.Question }}</h3>

              <!-- Hint Section -->
              @if (currentQuestion()?.Hint) {
                <mat-expansion-panel class="hint-panel" [expanded]="isHintVisible(currentQuestion()?.Id || '')">
                  <mat-expansion-panel-header>
                    <mat-panel-title>
                      <mat-icon>lightbulb</mat-icon>
                      Hint
                    </mat-panel-title>
                  </mat-expansion-panel-header>
                  <p>{{ currentQuestion()?.Hint }}</p>
                </mat-expansion-panel>
              }

              <!-- Answer Revealed -->
              @if (isAnswerRevealed(currentQuestion()?.Id || '') && currentQuestion()) {
                <div class="answer-revealed">
                  <mat-icon>visibility</mat-icon>
                  <strong>Correct Answer:</strong>
                  @if (currentQuestion()!.AllowMultipleSelection) {
                    @if (isCorrectAnswerArray(currentQuestion()!.CorrectAnswer)) {
                      @for (answerIndex of getCorrectAnswerArray(currentQuestion()!.CorrectAnswer); track answerIndex) {
                        <span class="correct-answer-text">{{ currentQuestion()!.Options[answerIndex] }}</span>
                        @if (!$last) { <span>, </span> }
                      }
                    } @else {
                      <span class="correct-answer-text">{{ getCorrectAnswerText(currentQuestion()!.CorrectAnswer) }}</span>
                    }
                  } @else {
                    <span class="correct-answer-text">{{ getCorrectAnswerText(currentQuestion()!.CorrectAnswer) }}</span>
                  }
                </div>
              }

              <!-- Single Choice Questions -->
              @if (!currentQuestion()?.AllowMultipleSelection) {
                <mat-radio-group [ngModel]="selectedAnswer()" (ngModelChange)="selectedAnswer.set($event); onAnswerChange()" class="options-group">
                  @for (option of currentQuestion()?.Options; track $index) {
                    <mat-radio-button
                      [value]="$index"
                      class="option"
                      [class.correct-answer]="isAnswerRevealed(currentQuestion()?.Id || '') && isCorrectAnswer($index)">
                      {{ option }}
                    </mat-radio-button>
                  }
                </mat-radio-group>
              }

              <!-- Multiple Choice Questions -->
              @if (currentQuestion()?.AllowMultipleSelection) {
                <div class="options-group">
                  @for (option of currentQuestion()?.Options; track $index) {
                    <mat-checkbox
                      [checked]="isOptionSelected($index)"
                      (change)="onMultipleChoiceChange($index, $event.checked)"
                      class="option"
                      [class.correct-answer]="isAnswerRevealed(currentQuestion()?.Id || '') && isCorrectAnswer($index)">
                      {{ option }}
                    </mat-checkbox>
                  }
                </div>
              }

              <div class="question-actions">
                @if (currentQuestion()?.Hint && !isHintVisible(currentQuestion()?.Id || '')) {
                  <button mat-button (click)="showHint(currentQuestion()?.Id || '')">
                    <mat-icon>lightbulb</mat-icon>
                    Show Hint
                  </button>
                }
                @if (!isAnswerRevealed(currentQuestion()?.Id || '')) {
                  <button mat-button color="accent" (click)="revealAnswer(currentQuestion()?.Id || '')">
                    <mat-icon>visibility</mat-icon>
                    Show Answer
                  </button>
                }
              </div>
            </mat-card-content>

            <mat-divider></mat-divider>

            <mat-card-actions class="navigation-actions">
              <button mat-button (click)="previousQuestion()" [disabled]="currentQuestionIndex() === 0">
                <mat-icon>arrow_back</mat-icon>
                Previous
              </button>

              <div class="spacer"></div>

              @if (currentQuestionIndex() < currentTest()!.Questions.length - 1) {
                <button mat-raised-button color="primary" (click)="nextQuestion()">
                  Next
                  <mat-icon>arrow_forward</mat-icon>
                </button>
              } @else {
                <button mat-raised-button color="accent" (click)="submitTest()">
                  <mat-icon>send</mat-icon>
                  Submit Test
                </button>
              }
            </mat-card-actions>
          </mat-card>

          <!-- Question Navigator -->
          <mat-card class="navigator-card">
            <mat-card-header>
              <mat-card-title>Question Navigator</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="legend">
                <span class="legend-item"><span class="dot answered"></span> Answered</span>
                <span class="legend-item"><span class="dot marked"></span> Marked</span>
                <span class="legend-item"><span class="dot unanswered"></span> Unanswered</span>
              </div>
              <div class="question-grid">
                @for (question of currentTest()!.Questions; track question.Id; let i = $index) {
                  <button
                    mat-mini-fab
                    [color]="getQuestionButtonColor(question.Id, i)"
                    [class.current]="i === currentQuestionIndex()"
                    [class.marked-for-review]="isQuestionMarkedForReview(question.Id)"
                    (click)="goToQuestion(i)"
                    matTooltip="Question {{ i + 1 }}">
                    {{ i + 1 }}
                    @if (isQuestionMarkedForReview(question.Id)) {
                      <mat-icon class="flag-overlay">flag</mat-icon>
                    }
                  </button>
                }
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      }

      <!-- Results -->
      @if (showResults() && currentAttempt()) {
        <div class="results">
          <mat-card class="results-card">
            <mat-card-header>
              <mat-icon [class.passed]="currentAttempt()!.Passed" [class.failed]="!currentAttempt()!.Passed" class="result-icon">
                {{ currentAttempt()!.Passed ? 'check_circle' : 'cancel' }}
              </mat-icon>
              <mat-card-title>
                {{ currentAttempt()!.Passed ? 'Congratulations!' : 'Not Passed' }}
              </mat-card-title>
            </mat-card-header>

            <mat-card-content>
              <div class="score-display">
                <div class="score-value">{{ currentAttempt()!.Score | number:'1.0-0' }}%</div>
                <div class="score-label">Your Score</div>
              </div>

              <div class="results-stats">
                <div class="stat">
                  <mat-icon>assignment</mat-icon>
                  <span>{{ getCorrectAnswersCount() }} / {{ currentTest()!.Questions.length }}</span>
                  <small>Correct Answers</small>
                </div>
                <div class="stat">
                  <mat-icon>trending_up</mat-icon>
                  <span>{{ currentTest()!.PassingScore }}%</span>
                  <small>Passing Score</small>
                </div>
                @if (currentTest()!.HasTimer) {
                  <div class="stat">
                    <mat-icon>timer</mat-icon>
                    <span>{{ currentTest()!.Duration }}m</span>
                    <small>Time Limit</small>
                  </div>
                }
              </div>

              <!-- Questions Marked for Review -->
              @if (currentAttempt()!.MarkedForReview && currentAttempt()!.MarkedForReview.length > 0) {
                <div class="review-section">
                  <h3>Questions Marked for Review</h3>
                  <div class="review-questions">
                    @for (questionId of currentAttempt()!.MarkedForReview; track questionId) {
                      @let question = getQuestionById(questionId);
                      @if (question) {
                        <mat-chip (click)="scrollToQuestion(questionId)">
                          Question {{ getQuestionIndex(questionId) + 1 }}
                        </mat-chip>
                      }
                    }
                  </div>
                </div>
              }

              <!-- Answer Review -->
              <div class="answer-review">
                <h3>Answer Review</h3>
                @for (question of currentTest()!.Questions; track question.Id; let i = $index) {
                  <div [id]="'question-' + question.Id" class="review-item" [class.correct]="isAnswerCorrect(question.Id)" [class.incorrect]="!isAnswerCorrect(question.Id)">
                    <div class="review-header">
                      <div class="review-header-left">
                        <span class="review-number">Question {{ i + 1 }}</span>
                        @if (isQuestionMarkedForReview(question.Id)) {
                          <mat-icon class="marked-flag">flag</mat-icon>
                        }
                      </div>
                      <mat-icon>{{ isAnswerCorrect(question.Id) ? 'check_circle' : 'cancel' }}</mat-icon>
                    </div>
                    <p class="review-question">{{ question.Question }}</p>
                    <div class="review-answers">
                      <div class="your-answer" [class.wrong]="!isAnswerCorrect(question.Id)">
                        <strong>Your Answer:</strong> {{ question.Options[getUserAnswer(question.Id)] || 'Not answered' }}
                      </div>
                      @if (!isAnswerCorrect(question.Id)) {
                        <div class="correct-answer">
                          <strong>Correct Answer:</strong> {{ getCorrectAnswerText(question.CorrectAnswer) }}
                        </div>
                      }
                      @if (question.Explanation) {
                        <div class="explanation">
                          <strong>Explanation:</strong> {{ question.Explanation }}
                        </div>
                      }
                      @if (question.Hint && isHintUsed(question.Id)) {
                        <div class="hint-used">
                          <mat-icon>lightbulb</mat-icon>
                          <span>Hint was used for this question</span>
                        </div>
                      }
                      @if (isAnswerWasRevealed(question.Id)) {
                        <div class="answer-was-revealed">
                          <mat-icon>visibility</mat-icon>
                          <span>Answer was revealed for this question</span>
                        </div>
                      }
                    </div>
                  </div>
                }
              </div>
            </mat-card-content>

            <mat-card-actions>
              <button mat-raised-button color="primary" (click)="retakeTest()">
                <mat-icon>refresh</mat-icon>
                Retake Test
              </button>
              <button mat-button (click)="backToTests()">
                <mat-icon>arrow_back</mat-icon>
                Back to Tests
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: var(--density-padding-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    .cert-test-header {
      display: flex;
      align-items: center;
      margin-bottom: var(--density-margin-lg);
      background-color: var(--bg-card);
      padding: var(--density-padding-md) var(--density-padding-lg);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      border: 1px solid var(--border-color);
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-md);
    }

    .header-icon {
      font-size: var(--density-icon-size-lg);
      width: var(--density-icon-size-lg);
      height: var(--density-icon-size-lg);
      color: var(--primary-color);
    }

    .header-text h1 {
      margin: 0;
      font-size: var(--density-font-size-h1);
      font-weight: 600;
      line-height: var(--density-line-height-sm);
      color: var(--text-primary);
    }

    .header-text p {
      margin: 0;
      font-size: var(--density-font-size-md);
      color: var(--text-secondary);
      line-height: var(--density-line-height-md);
    }

    .test-selection {
      margin-bottom: var(--density-margin-lg);
    }

    .test-selection h2 {
      font-size: var(--density-font-size-h2);
      color: var(--text-primary);
      margin-bottom: var(--density-margin-md);
    }

    .tests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--density-spacing-lg);
    }

    .test-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow);
      border: 1px solid var(--border-color);
    }

    .test-card mat-card-title {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-sm);
      font-size: var(--density-font-size-h3);
      color: var(--text-primary);
    }

    .test-description {
      font-size: var(--density-font-size-sm);
      color: var(--text-secondary);
      margin-bottom: var(--density-margin-md);
      line-height: var(--density-line-height-md);
    }

    .test-meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--density-spacing-xs);
    }

    .test-meta mat-chip {
      font-size: var(--density-font-size-xs);
      height: var(--density-chip-height);
      padding: var(--density-chip-padding);
    }

    .active-test {
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: var(--density-spacing-lg);
    }

    .progress-card {
      grid-column: 1 / -1;
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow);
      border: 1px solid var(--border-color);
      padding: var(--density-padding-md);
    }

    .progress-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--density-margin-sm);
      font-size: var(--density-font-size-sm);
      color: var(--text-primary);
    }

    .progress-left, .progress-right {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-sm);
    }

    .time-warning {
      background-color: var(--warn-color) !important;
      color: white !important;
    }

    .question-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow);
      border: 1px solid var(--border-color);
    }

    .question-header {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-sm);
      margin-bottom: var(--density-margin-md);
    }

    .category-chip {
      background-color: var(--accent-color);
      color: white;
    }

    .question-number {
      flex-grow: 1;
      font-size: var(--density-font-size-sm);
      color: var(--text-secondary);
      font-weight: 500;
    }

    .question-text {
      font-size: var(--density-font-size-h3);
      font-weight: 500;
      margin: var(--density-margin-md) 0;
      color: var(--text-primary);
      line-height: var(--density-line-height-md);
    }

    .hint-panel {
      margin-bottom: var(--density-margin-md);
      background-color: var(--bg-tertiary);
      border: 1px solid var(--border-color);
    }

    .hint-panel mat-panel-title {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-xs);
      color: var(--text-primary);
    }

    .answer-revealed {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-sm);
      padding: var(--density-padding-sm);
      margin-bottom: var(--density-margin-md);
      background-color: rgba(76, 175, 80, 0.1);
      border: 1px solid var(--success-color);
      border-radius: var(--border-radius);
      color: var(--success-color);
    }

    .options-group {
      display: flex;
      flex-direction: column;
      gap: var(--density-spacing-sm);
      margin-bottom: var(--density-margin-md);
    }

    .option {
      padding: var(--density-padding-sm);
      border-radius: var(--border-radius);
      transition: background-color 0.2s ease;
    }

    .option:hover {
      background-color: var(--bg-tertiary);
    }

    .option.correct-answer {
      background-color: rgba(76, 175, 80, 0.1);
      border: 2px solid var(--success-color);
    }

    .correct-answer-text {
      color: var(--success-color);
      font-weight: 600;
    }

    .question-actions {
      display: flex;
      gap: var(--density-spacing-sm);
      margin-bottom: var(--density-margin-md);
    }

    .navigation-actions {
      display: flex;
      justify-content: space-between;
      padding: var(--density-padding-md) var(--density-padding-lg);
    }

    .spacer {
      flex-grow: 1;
    }

    .navigator-card {
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow);
      border: 1px solid var(--border-color);
    }

    .legend {
      display: flex;
      gap: var(--density-spacing-md);
      margin-bottom: var(--density-margin-md);
      font-size: var(--density-font-size-xs);
      color: var(--text-primary);
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-xs);
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
    }

    .dot.answered { background-color: var(--primary-color); }
    .dot.marked { background-color: var(--warn-color); }
    .dot.unanswered { background-color: var(--bg-tertiary); border: 1px solid var(--border-color); }

    .question-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
      gap: var(--density-spacing-xs);
    }

    .question-grid button {
      position: relative;
      color: var(--text-primary) !important;
      background-color: var(--bg-tertiary) !important;
      border: 1px solid var(--border-color) !important;
    }

    .question-grid button:hover {
      background-color: var(--primary-color) !important;
      color: white !important;
    }

    .question-grid button.current {
      background-color: var(--primary-color) !important;
      color: white !important;
    }

    .question-grid button[color="primary"] {
      background-color: var(--primary-color) !important;
      color: white !important;
    }

    .question-grid button[color="warn"] {
      background-color: var(--warn-color) !important;
      color: white !important;
    }

    .question-grid button[color="basic"] {
      background-color: var(--bg-tertiary) !important;
      color: var(--text-primary) !important;
    }

    .question-grid button.marked-for-review {
      border: 2px solid var(--warn-color) !important;
    }

    .flag-overlay {
      position: absolute;
      top: -4px;
      right: -4px;
      font-size: 14px;
      width: 14px;
      height: 14px;
      color: var(--warn-color);
    }

    .results-card {
      max-width: 800px;
      width: 100%;
      background-color: var(--bg-card);
      color: var(--text-primary);
      box-shadow: var(--shadow);
      border: 1px solid var(--border-color);
    }

    .results-card mat-card-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--density-padding-lg);
    }

    .result-icon {
      font-size: var(--density-icon-size-xl);
      width: var(--density-icon-size-xl);
      height: var(--density-icon-size-xl);
      margin-bottom: var(--density-margin-sm);
    }

    .result-icon.passed { color: var(--success-color); }
    .result-icon.failed { color: var(--warn-color); }

    .score-display {
      text-align: center;
      margin-bottom: var(--density-margin-lg);
    }

    .score-value {
      font-size: 3rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .score-label {
      font-size: var(--density-font-size-md);
      color: var(--text-secondary);
    }

    .results-stats {
      display: flex;
      justify-content: space-around;
      margin-bottom: var(--density-margin-lg);
      padding: var(--density-padding-md) 0;
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .review-section {
      margin-bottom: var(--density-margin-lg);
      padding: var(--density-padding-md);
      background-color: var(--bg-tertiary);
      border-radius: var(--border-radius);
    }

    .review-section h3 {
      margin-top: 0;
      color: var(--text-primary);
    }

    .review-questions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--density-spacing-xs);
    }

    .review-questions mat-chip {
      cursor: pointer;
    }

    .answer-review h3 {
      font-size: var(--density-font-size-h3);
      color: var(--text-primary);
      margin-bottom: var(--density-margin-md);
      border-bottom: 1px solid var(--border-color);
      padding-bottom: var(--density-padding-sm);
    }

    .review-item {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      padding: var(--density-padding-md);
      margin-bottom: var(--density-margin-md);
      scroll-margin-top: 100px;
    }

    .review-item.correct { border-left: 4px solid var(--success-color); }
    .review-item.incorrect { border-left: 4px solid var(--warn-color); }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--density-margin-sm);
    }

    .review-header-left {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-sm);
    }

    .marked-flag {
      color: var(--warn-color);
    }

    .review-question {
      font-weight: 500;
      color: var(--text-primary);
      margin-bottom: var(--density-margin-sm);
    }

    .review-answers div {
      font-size: var(--density-font-size-sm);
      color: var(--text-secondary);
      margin-bottom: var(--density-margin-xs);
    }

    .your-answer.wrong {
      color: var(--warn-color);
    }

    .correct-answer {
      color: var(--success-color) !important;
    }

    .hint-used, .answer-was-revealed {
      display: flex;
      align-items: center;
      gap: var(--density-spacing-xs);
      color: var(--text-secondary);
      font-style: italic;
    }

    @media (max-width: 768px) {
      .active-test {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CertTestComponent implements OnInit, OnDestroy {
  readonly store = inject(CertTestStore);
  readonly route = inject(ActivatedRoute);

  // Store signals
  availableTests = this.store.availableTests;
  currentTest = this.store.currentTest;
  currentAttempt = this.store.currentAttempt;
  userAnswers = this.store.userAnswers;
  isTestActive = this.store.isTestActive;
  showResults = this.store.showResults;
  testProgress = this.store.testProgress;
  markedForReviewCount = this.store.markedForReviewCount;
  timeRemainingFormatted = this.store.timeRemainingFormatted;

  // Local state as signals
  currentQuestionIndex = signal(0);
  selectedAnswer = signal<number | null>(null);

  // Computed
  currentQuestion = computed(() => {
    const test = this.currentTest();
    const index = this.currentQuestionIndex();
    return test ? test.Questions[index] : null;
  });

  ngOnInit() {
    // Check if a testId is provided in the route
    this.route.params.subscribe(params => {
      const testId = params['testId'];
      if (testId) {
        // Find the test by ID and start it
        const test = this.availableTests().find(t => t.Id === testId);
        if (test) {
          this.startTest(test);
        }
      }
    });
  }

  ngOnDestroy() {
    // Clean up timer on component destroy
    const interval = this.store.timerInterval();
    if (interval) {
      clearInterval(interval);
    }
  }

  startTest(test: TestDto) {
    this.store.startTest(test);
    this.currentQuestionIndex.set(0);
    this.loadAnswer();
  }

  nextQuestion() {
    this.saveCurrentAnswer();
    if (this.currentTest() && this.currentQuestionIndex() < this.currentTest()!.Questions.length - 1) {
      this.currentQuestionIndex.set(this.currentQuestionIndex() + 1);
      this.loadAnswer();
    }
  }

  previousQuestion() {
    this.saveCurrentAnswer();
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.set(this.currentQuestionIndex() - 1);
      this.loadAnswer();
    }
  }

  goToQuestion(index: number) {
    this.saveCurrentAnswer();
    this.currentQuestionIndex.set(index);
    this.loadAnswer();
  }

  saveCurrentAnswer() {
    const selected = this.selectedAnswer();
    if (selected !== null && this.currentQuestion()) {
      const answer: UserAnswerDto = {
        QuestionId: this.currentQuestion()!.Id,
        SelectedOption: selected as number
      };
      this.store.answerQuestion(answer);
    }
  }

  onAnswerChange() {
    this.saveCurrentAnswer();
  }

  // Multiple choice question methods
  isOptionSelected(optionIndex: number): boolean {
    const question = this.currentQuestion();
    if (!question || !question.AllowMultipleSelection) return false;

    const existingAnswer = this.userAnswers().find(a => a.QuestionId === question.Id);
    if (!existingAnswer) return false;

    const selectedOptions = Array.isArray(existingAnswer.SelectedOption)
      ? existingAnswer.SelectedOption
      : [existingAnswer.SelectedOption];

    return selectedOptions.includes(optionIndex);
  }

  onMultipleChoiceChange(optionIndex: number, checked: boolean) {
    const question = this.currentQuestion();
    if (!question || !question.AllowMultipleSelection) return;

    const existingAnswer = this.userAnswers().find(a => a.QuestionId === question.Id);
    let selectedOptions: number[] = [];

    if (existingAnswer) {
      selectedOptions = Array.isArray(existingAnswer.SelectedOption)
        ? [...existingAnswer.SelectedOption]
        : [existingAnswer.SelectedOption];
    }

    if (checked) {
      if (!selectedOptions.includes(optionIndex)) {
        selectedOptions.push(optionIndex);
      }
    } else {
      selectedOptions = selectedOptions.filter(opt => opt !== optionIndex);
    }

    const answer: UserAnswerDto = {
      QuestionId: question.Id,
      SelectedOption: selectedOptions
    };

    this.store.answerQuestion(answer);
  }

  isCorrectAnswer(optionIndex: number): boolean {
    const question = this.currentQuestion();
    if (!question) return false;

    if (question.AllowMultipleSelection) {
      const correctAnswers = Array.isArray(question.CorrectAnswer)
        ? question.CorrectAnswer
        : [question.CorrectAnswer];
      return correctAnswers.includes(optionIndex);
    } else {
      return question.CorrectAnswer === optionIndex;
    }
  }

  isCorrectAnswerArray(correctAnswer: number | number[]): correctAnswer is number[] {
    return Array.isArray(correctAnswer);
  }

  getCorrectAnswerText(correctAnswer: number | number[]): string {
    const question = this.currentQuestion();
    if (!question) return '';

    if (Array.isArray(correctAnswer)) {
      return correctAnswer.map(index => question.Options[index]).join(', ');
    } else {
      return question.Options[correctAnswer];
    }
  }

  getCorrectAnswerArray(correctAnswer: number | number[]): number[] {
    return Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
  }

  loadAnswer() {
    const question = this.currentQuestion();
    if (question) {
      const existingAnswer = this.userAnswers().find(a => a.QuestionId === question.Id);
      if (question.AllowMultipleSelection) {
        // For multiple choice questions, we don't use selectedAnswer signal
        // The checkboxes handle their own state
        this.selectedAnswer.set(null);
      } else {
        // For single choice questions
        const selectedOption = existingAnswer?.SelectedOption;
        if (selectedOption !== null && selectedOption !== undefined && !Array.isArray(selectedOption) && selectedOption >= 0) {
          this.selectedAnswer.set(selectedOption);
        } else {
          this.selectedAnswer.set(null);
        }
      }
    }
  }

  isQuestionAnswered(questionId: string): boolean {
    const answer = this.userAnswers().find(a => a.QuestionId === questionId);
    if (!answer) return false;

    if (Array.isArray(answer.SelectedOption)) {
      return answer.SelectedOption.length > 0;
    } else {
      return answer.SelectedOption !== null && answer.SelectedOption !== undefined && typeof answer.SelectedOption === 'number' && answer.SelectedOption >= 0;
    }
  }

  isQuestionMarkedForReview(questionId: string): boolean {
    const attempt = this.currentAttempt();
    return attempt?.MarkedForReview?.includes(questionId) || false;
  }

  toggleMarkForReview(questionId: string) {
    this.store.toggleMarkForReview(questionId);
  }

  isHintVisible(questionId: string): boolean {
    const answer = this.userAnswers().find(a => a.QuestionId === questionId);
    return answer?.HintUsed || false;
  }

  showHint(questionId: string) {
    this.store.toggleHint(questionId);
  }

  isAnswerRevealed(questionId: string): boolean {
    const answer = this.userAnswers().find(a => a.QuestionId === questionId);
    return answer?.AnswerRevealed || false;
  }

  revealAnswer(questionId: string) {
    this.store.revealAnswer(questionId);
  }

  getQuestionButtonColor(questionId: string, index: number): 'primary' | 'warn' | 'basic' {
    if (index === this.currentQuestionIndex()) return 'primary';
    if (this.isQuestionMarkedForReview(questionId)) return 'warn';
    if (this.isQuestionAnswered(questionId)) return 'primary';
    return 'basic';
  }

  submitTest() {
    this.saveCurrentAnswer();
    this.store.submitTest();
  }

  retakeTest() {
    const test = this.currentTest();
    if (test) {
      this.store.resetTest();
      this.store.startTest(test);
      this.currentQuestionIndex.set(0);
      this.selectedAnswer.set(null);
    }
  }

  backToTests() {
    this.store.resetTest();
    this.currentQuestionIndex.set(0);
    this.selectedAnswer.set(null);
  }

  getCorrectAnswersCount(): number {
    const test = this.currentTest();
    if (!test) return 0;

    let count = 0;
    this.userAnswers().forEach(answer => {
      const question = test.Questions.find(q => q.Id === answer.QuestionId);
      if (question && question.CorrectAnswer === answer.SelectedOption) {
        count++;
      }
    });
    return count;
  }

  isAnswerCorrect(questionId: string): boolean {
    const test = this.currentTest();
    if (!test) return false;

    const question = test.Questions.find(q => q.Id === questionId);
    const userAnswer = this.userAnswers().find(a => a.QuestionId === questionId);

    if (!question || !userAnswer) return false;

    if (question.AllowMultipleSelection) {
      const correctAnswers = Array.isArray(question.CorrectAnswer) ? question.CorrectAnswer : [question.CorrectAnswer];
      const selectedAnswers = Array.isArray(userAnswer.SelectedOption) ? userAnswer.SelectedOption : [userAnswer.SelectedOption];

      const correctSet = new Set(correctAnswers.sort());
      const selectedSet = new Set(selectedAnswers.sort());

      return correctSet.size === selectedSet.size &&
             [...correctSet].every(val => selectedSet.has(val));
    } else {
      return question.CorrectAnswer === userAnswer.SelectedOption;
    }
  }

  getUserAnswer(questionId: string): number {
    const answer = this.userAnswers().find(a => a.QuestionId === questionId);
    if (!answer) return -1;

    if (Array.isArray(answer.SelectedOption)) {
      return answer.SelectedOption.length > 0 ? answer.SelectedOption[0] : -1;
    } else {
      return answer.SelectedOption !== null && answer.SelectedOption !== undefined && answer.SelectedOption >= 0 ? answer.SelectedOption : -1;
    }
  }

  isHintUsed(questionId: string): boolean {
    const answer = this.userAnswers().find(a => a.QuestionId === questionId);
    return answer?.HintUsed || false;
  }

  isAnswerWasRevealed(questionId: string): boolean {
    const answer = this.userAnswers().find(a => a.QuestionId === questionId);
    return answer?.AnswerRevealed || false;
  }

  getQuestionById(questionId: string) {
    return this.currentTest()?.Questions.find(q => q.Id === questionId);
  }

  getQuestionIndex(questionId: string): number {
    return this.currentTest()?.Questions.findIndex(q => q.Id === questionId) || 0;
  }

  scrollToQuestion(questionId: string) {
    const element = document.getElementById('question-' + questionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
