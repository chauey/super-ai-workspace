import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-reactive-forms',
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
    MatCheckboxModule
  ],
  template: `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="container mx-auto px-4 max-w-4xl">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Reactive Forms Demo</h1>
          <p class="text-xl text-gray-600">Demonstrating Angular reactive forms with Material Design and Tailwind CSS</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Form Card -->
          <mat-card class="p-6">
            <mat-card-header>
              <mat-card-title class="text-2xl text-blue-600">User Information</mat-card-title>
              <mat-card-subtitle>Fill out the form below</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <!-- Name Field -->
                <mat-form-field appearance="outline" class="w-full">
                  <mat-label>Full Name</mat-label>
                  <input matInput formControlName="name" placeholder="Enter your name">
                  @if (userForm.get('name')?.invalid && userForm.get('name')?.touched) {
                    <mat-error>
                      @if (userForm.get('name')?.errors?.['required']) {
                        Name is required
                      }
                      @if (userForm.get('name')?.errors?.['minlength']) {
                        Name must be at least 2 characters
                      }
                    </mat-error>
                  }
                </mat-form-field>

                <!-- Email Field -->
                <mat-form-field appearance="outline" class="w-full">
                  <mat-label>Email</mat-label>
                  <input matInput type="email" formControlName="email" placeholder="Enter your email">
                  @if (userForm.get('email')?.invalid && userForm.get('email')?.touched) {
                    <mat-error>
                      @if (userForm.get('email')?.errors?.['required']) {
                        Email is required
                      }
                      @if (userForm.get('email')?.errors?.['email']) {
                        Please enter a valid email
                      }
                    </mat-error>
                  }
                </mat-form-field>

                <!-- Age Field -->
                <mat-form-field appearance="outline" class="w-full">
                  <mat-label>Age</mat-label>
                  <input matInput type="number" formControlName="age" placeholder="Enter your age">
                  @if (userForm.get('age')?.invalid && userForm.get('age')?.touched) {
                    <mat-error>
                      @if (userForm.get('age')?.errors?.['required']) {
                        Age is required
                      }
                      @if (userForm.get('age')?.errors?.['min']) {
                        Age must be at least 18
                      }
                      @if (userForm.get('age')?.errors?.['max']) {
                        Age must be less than 120
                      }
                    </mat-error>
                  }
                </mat-form-field>

                <!-- Country Field -->
                <mat-form-field appearance="outline" class="w-full">
                  <mat-label>Country</mat-label>
                  <mat-select formControlName="country">
                    <mat-option value="">Select a country</mat-option>
                    <mat-option value="us">United States</mat-option>
                    <mat-option value="uk">United Kingdom</mat-option>
                    <mat-option value="ca">Canada</mat-option>
                    <mat-option value="au">Australia</mat-option>
                  </mat-select>
                  @if (userForm.get('country')?.invalid && userForm.get('country')?.touched) {
                    <mat-error>Please select a country</mat-error>
                  }
                </mat-form-field>

                <!-- Newsletter Checkbox -->
                <div class="flex items-center">
                  <mat-checkbox formControlName="newsletter" color="primary">
                    Subscribe to newsletter
                  </mat-checkbox>
                </div>

                <!-- Form Actions -->
                <div class="flex space-x-4 pt-4">
                  <button mat-raised-button color="primary" type="submit" [disabled]="userForm.invalid">
                    Submit
                  </button>
                  <button mat-stroked-button type="button" (click)="resetForm()">
                    Reset
                  </button>
                </div>
              </form>
            </mat-card-content>
          </mat-card>

          <!-- Status Card -->
          <mat-card class="p-6">
            <mat-card-header>
              <mat-card-title class="text-2xl text-green-600">Form Status</mat-card-title>
              <mat-card-subtitle>Real-time form validation</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="p-3 rounded-lg" [class]="userForm.valid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                  <div class="font-semibold">Valid</div>
                  <div class="text-sm">{{ userForm.valid }}</div>
                </div>
                <div class="p-3 rounded-lg" [class]="userForm.invalid ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'">
                  <div class="font-semibold">Invalid</div>
                  <div class="text-sm">{{ userForm.invalid }}</div>
                </div>
                <div class="p-3 rounded-lg bg-blue-100 text-blue-800">
                  <div class="font-semibold">Pending</div>
                  <div class="text-sm">{{ userForm.pending }}</div>
                </div>
                <div class="p-3 rounded-lg bg-purple-100 text-purple-800">
                  <div class="font-semibold">Dirty</div>
                  <div class="text-sm">{{ userForm.dirty }}</div>
                </div>
                <div class="p-3 rounded-lg bg-orange-100 text-orange-800">
                  <div class="font-semibold">Touched</div>
                  <div class="text-sm">{{ userForm.touched }}</div>
                </div>
                <div class="p-3 rounded-lg bg-gray-100 text-gray-800">
                  <div class="font-semibold">Values</div>
                  <div class="text-sm">{{ userForm.value | json }}</div>
                </div>
              </div>

              @if (submittedData) {
                <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 class="text-lg font-semibold text-green-800 mb-2">Submitted Data</h3>
                  <pre class="text-sm text-green-700 bg-white p-3 rounded border overflow-x-auto">{{ submittedData | json }}</pre>
                </div>
              }
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ReactiveFormsComponent {
  userForm: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
      newsletter: [false],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submittedData = this.userForm.value;
      console.log('Form submitted:', this.submittedData);
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {
    this.userForm.reset();
    this.submittedData = null;
  }
}
