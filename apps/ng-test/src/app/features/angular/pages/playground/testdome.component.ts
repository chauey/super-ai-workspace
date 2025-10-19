import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testdome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <h1>TestDome Page 1</h1>
      <p>This is a test page for TestDome-style questions and challenges.</p>

      <div class="demo-section">
        <h2>Angular Fundamentals Quiz</h2>
        <div class="quiz-container">
          <div class="question" *ngFor="let question of questions(); let i = index">
            <h3>Question {{ i + 1 }}: {{ question.text }}</h3>
            <div class="options">
              <label *ngFor="let option of question.options">
                <input type="radio" [name]="'q' + i" [value]="option"
                       (change)="selectAnswer(i, option)">
                {{ option }}
              </label>
            </div>
          </div>

          <button (click)="submitQuiz()" [disabled]="!isQuizComplete()">
            Submit Quiz
          </button>

          <div *ngIf="quizSubmitted()" class="results">
            <h3>Quiz Results</h3>
            <p>Score: {{ getScore() }}/{{ questions().length }}</p>
            <p>Percentage: {{ getPercentage() }}%</p>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Coding Challenge</h2>
        <div class="challenge-container">
          <h3>Implement a Counter Component</h3>
          <p>Create a counter that increments by 1 when clicked, with a reset button.</p>

          <div class="counter-demo">
            <p>Count: {{ counterValue() }}</p>
            <button (click)="increment()">Increment</button>
            <button (click)="reset()">Reset</button>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>Data Binding Challenge</h2>
        <div class="binding-demo">
          <input [(ngModel)]="inputValue" placeholder="Type something...">
          <p>You typed: {{ inputValue }}</p>
          <p>Character count: {{ inputValue.length }}</p>
          <p>Reversed: {{ getReversed() }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: var(--bg-primary, white);
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h1 {
      color: var(--text-primary, #333);
      margin-bottom: 1rem;
    }

    .demo-section {
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
    }

    .quiz-container {
      max-width: 600px;
    }

    .question {
      margin: 1rem 0;
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    .options {
      margin: 0.5rem 0;
    }

    .options label {
      display: block;
      margin: 0.5rem 0;
      cursor: pointer;
    }

    .options input[type="radio"] {
      margin-right: 0.5rem;
    }

    button {
      padding: 0.5rem 1rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 1rem 0;
    }

    button:hover:not(:disabled) {
      background: #1565c0;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .results {
      margin: 1rem 0;
      padding: 1rem;
      background: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
    }

    .challenge-container {
      max-width: 500px;
    }

    .counter-demo {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
      margin: 1rem 0;
    }

    .counter-demo button {
      margin: 0.5rem;
    }

    .binding-demo {
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      margin: 0.5rem 0;
    }
  `]
})
export class TestdomeComponent {
  inputValue = '';
  counterValue = signal(0);
  quizSubmitted = signal(false);
  answers = signal<{ [key: number]: string }>({});

  questions = signal([
    {
      text: 'What is the correct way to bind a property in Angular?',
      options: ['{{ property }}', '[property]', '{{ [property] }}', 'All of the above'],
      correct: 0
    },
    {
      text: 'Which directive is used for conditional rendering?',
      options: ['*ngIf', '*ngFor', '*ngSwitch', '*ngShow'],
      correct: 0
    },
    {
      text: 'What is the purpose of ngOnInit?',
      options: ['Initialize component', 'Destroy component', 'Update component', 'Render component'],
      correct: 0
    }
  ]);

  selectAnswer(questionIndex: number, answer: string) {
    this.answers.update(answers => ({
      ...answers,
      [questionIndex]: answer
    }));
  }

  isQuizComplete(): boolean {
    return Object.keys(this.answers()).length === this.questions().length;
  }

  submitQuiz() {
    this.quizSubmitted.set(true);
  }

  getScore(): number {
    let score = 0;
    const answers = this.answers();

    this.questions().forEach((question, index) => {
      if (answers[index] === question.options[question.correct]) {
        score++;
      }
    });

    return score;
  }

  getPercentage(): number {
    return Math.round((this.getScore() / this.questions().length) * 100);
  }

  increment() {
    this.counterValue.update(value => value + 1);
  }

  reset() {
    this.counterValue.set(0);
  }

  getReversed(): string {
    return this.inputValue.split('').reverse().join('');
  }
}
