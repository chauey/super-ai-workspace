import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-job-board',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `<div class="app-container"><div class="hero-section"><h1>Job Board</h1><p>Job search and application tracking</p></div><div class="coming-soon"><mat-icon>construction</mat-icon><h2>Coming Soon</h2></div></div>`,
  styles: [`.app-container{padding:2rem;max-width:1200px;margin:0 auto}.hero-section{background-color:var(--bg-card);color:var(--text-primary);box-shadow:var(--shadow-lg);padding:2rem;text-align:center;border-radius:8px}.hero-section h1{font-size:3rem;font-weight:700;color:var(--primary-color);margin-bottom:1rem}.hero-section p{color:var(--text-secondary);font-size:1.2rem}.coming-soon{text-align:center;margin-top:2rem}.coming-soon mat-icon{font-size:4rem;color:var(--warn-color)}.coming-soon h2{font-size:2rem;margin-top:1rem}`]
})
export class JobBoardComponent {}




