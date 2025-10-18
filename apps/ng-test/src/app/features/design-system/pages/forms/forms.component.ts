import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forms-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  template: `
    <div class="forms-page">
      <div class="bg-card rounded-lg shadow-themed p-6 mb-6">
        <h2 class="text-2xl font-bold text-primary mb-2">Form Components</h2>
        <p class="text-secondary">Input fields, validation, and form patterns</p>
      </div>

      <form [formGroup]="demoForm" class="space-y-6">
        <!-- Text Inputs -->
        <div class="bg-card rounded-lg shadow-themed p-6">
          <h3 class="text-lg font-semibold text-primary mb-4">Text Inputs</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Name</mat-label>
              <input matInput formControlName="name" />
              <mat-error *ngIf="demoForm.get('name')?.hasError('required')">
                Name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Email</mat-label>
              <input matInput type="email" formControlName="email" />
              <mat-error *ngIf="demoForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="demoForm.get('email')?.hasError('email')">
                Invalid email
              </mat-error>
            </mat-form-field>
          </div>
        </div>

        <!-- Select -->
        <div class="bg-card rounded-lg shadow-themed p-6">
          <h3 class="text-lg font-semibold text-primary mb-4">Select</h3>
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Role</mat-label>
            <mat-select formControlName="role">
              <mat-option value="admin">Admin</mat-option>
              <mat-option value="user">User</mat-option>
              <mat-option value="guest">Guest</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <!-- Checkboxes & Radio -->
        <div class="bg-card rounded-lg shadow-themed p-6">
          <h3 class="text-lg font-semibold text-primary mb-4">Checkboxes & Radio</h3>
          <div class="space-y-4">
            <mat-checkbox formControlName="subscribe">Subscribe to newsletter</mat-checkbox>
            <mat-slide-toggle formControlName="notifications">Enable notifications</mat-slide-toggle>

            <div>
              <p class="text-sm text-secondary mb-2">Select theme:</p>
              <mat-radio-group formControlName="theme">
                <mat-radio-button value="light" class="mr-4">Light</mat-radio-button>
                <mat-radio-button value="dark">Dark</mat-radio-button>
              </mat-radio-group>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="bg-card rounded-lg shadow-themed p-6">
          <div class="flex gap-4">
            <button mat-raised-button color="primary" type="submit">Submit</button>
            <button mat-raised-button type="button" (click)="demoForm.reset()">Reset</button>
          </div>
        </div>
      </form>
    </div>
  `,
})
export class FormsShowcaseComponent {
  demoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('user'),
    subscribe: new FormControl(false),
    notifications: new FormControl(true),
    theme: new FormControl('light'),
  });
}

