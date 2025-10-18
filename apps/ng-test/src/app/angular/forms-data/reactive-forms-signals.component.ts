import { Component, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-reactive-forms-signals',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  template: `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4 max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Reactive Forms with Signals Demo</h1>
          <p class="text-xl text-gray-600">Demonstrating reactive forms combined with Angular signals and Material Design</p>
        </div>

      <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            id="name"
            formControlName="name"
            placeholder="Enter your name"
            [class.error]="nameError()"
          >
          @if (nameError()) {
            <div class="error-message">{{ nameErrorMessage() }}</div>
          }
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            formControlName="email"
            placeholder="Enter your email"
            [class.error]="emailError()"
          >
          @if (emailError()) {
            <div class="error-message">{{ emailErrorMessage() }}</div>
          }
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input
            id="password"
            type="password"
            formControlName="password"
            placeholder="Enter your password"
            [class.error]="passwordError()"
          >
          @if (passwordError()) {
            <div class="error-message">{{ passwordErrorMessage() }}</div>
          }
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            formControlName="confirmPassword"
            placeholder="Confirm your password"
            [class.error]="confirmPasswordError()"
          >
          @if (confirmPasswordError()) {
            <div class="error-message">{{ confirmPasswordErrorMessage() }}</div>
          }
        </div>

        <div class="form-group">
          <label>
            <input type="checkbox" formControlName="terms">
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit" [disabled]="!isFormValid()">Submit</button>
        <button type="button" (click)="resetForm()">Reset</button>
      </form>

      <div class="form-status">
        <h3>Form Status (Signals)</h3>
        <p>Valid: {{ isFormValid() }}</p>
        <p>Invalid: {{ isFormInvalid() }}</p>
        <p>Dirty: {{ isFormDirty() }}</p>
        <p>Touched: {{ isFormTouched() }}</p>
        <p>Password Strength: {{ passwordStrength() }}</p>
        <p>Form Progress: {{ formProgress() }}%</p>
      </div>

      @if (submittedData()) {
        <div class="submitted-data">
          <h3>Submitted Data</h3>
          <pre>{{ submittedData() | json }}</pre>
        </div>
      }
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

    .form-group {
      margin: 1rem 0;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 4px;
      font-size: 1rem;
    }

    input.error {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    button {
      margin: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover:not(:disabled) {
      background: #1565c0;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .form-status {
      margin: 2rem 0;
      padding: 1rem;
      background: var(--bg-tertiary, #f8f9fa);
      border-radius: 4px;
    }

    .submitted-data {
      margin: 2rem 0;
      padding: 1rem;
      background: #e8f5e8;
      border-radius: 4px;
    }

    pre {
      background: var(--bg-tertiary, #f8f9fa);
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
    }
  `]
})
export class ReactiveFormsSignalsComponent {
  userForm: FormGroup;
  submittedData = signal<any>(null);

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  // Signal-based computed properties
  isFormValid = computed(() => this.userForm.valid);
  isFormInvalid = computed(() => this.userForm.invalid);
  isFormDirty = computed(() => this.userForm.dirty);
  isFormTouched = computed(() => this.userForm.touched);

  // Field-specific error signals
  nameError = computed(() => {
    const nameControl = this.userForm.get('name');
    return nameControl?.invalid && nameControl?.touched;
  });

  emailError = computed(() => {
    const emailControl = this.userForm.get('email');
    return emailControl?.invalid && emailControl?.touched;
  });

  passwordError = computed(() => {
    const passwordControl = this.userForm.get('password');
    return passwordControl?.invalid && passwordControl?.touched;
  });

  confirmPasswordError = computed(() => {
    const confirmPasswordControl = this.userForm.get('confirmPassword');
    return confirmPasswordControl?.invalid && confirmPasswordControl?.touched;
  });

  // Error message signals
  nameErrorMessage = computed(() => {
    const nameControl = this.userForm.get('name');
    if (nameControl?.errors?.['required']) return 'Name is required';
    if (nameControl?.errors?.['minlength']) return 'Name must be at least 2 characters';
    return '';
  });

  emailErrorMessage = computed(() => {
    const emailControl = this.userForm.get('email');
    if (emailControl?.errors?.['required']) return 'Email is required';
    if (emailControl?.errors?.['email']) return 'Please enter a valid email';
    return '';
  });

  passwordErrorMessage = computed(() => {
    const passwordControl = this.userForm.get('password');
    if (passwordControl?.errors?.['required']) return 'Password is required';
    if (passwordControl?.errors?.['minlength']) return 'Password must be at least 8 characters';
    return '';
  });

  confirmPasswordErrorMessage = computed(() => {
    const confirmPasswordControl = this.userForm.get('confirmPassword');
    if (confirmPasswordControl?.errors?.['required']) return 'Please confirm your password';
    if (this.userForm.errors?.['passwordMismatch']) return 'Passwords do not match';
    return '';
  });

  // Password strength signal
  passwordStrength = computed(() => {
    const password = this.userForm.get('password')?.value || '';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) {
      return 'Strong';
    }
    return 'Medium';
  });

  // Form progress signal
  formProgress = computed(() => {
    const controls = Object.keys(this.userForm.controls);
    const validControls = controls.filter(control =>
      this.userForm.get(control)?.valid
    ).length;
    return Math.round((validControls / controls.length) * 100);
  });

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submittedData.set(this.userForm.value);
      console.log('Form submitted:', this.submittedData());
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {
    this.userForm.reset();
    this.submittedData.set(null);
  }
}
