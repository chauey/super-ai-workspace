import { Routes } from '@angular/router';

export const resumeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./resume-home.component').then(m => m.ResumeHomeComponent)
  },
  {
    path: ':username/:slug',
    loadComponent: () => import('./resume-viewer.component').then(m => m.ResumeViewerComponent)
  }
];
