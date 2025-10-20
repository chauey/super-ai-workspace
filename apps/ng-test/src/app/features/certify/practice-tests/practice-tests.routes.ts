import { Routes } from '@angular/router';

export const practiceTestsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./practice-tests.component').then(m => m.PracticeTestsComponent)
  }
];
