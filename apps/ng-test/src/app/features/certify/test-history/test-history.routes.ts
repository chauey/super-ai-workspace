import { Routes } from '@angular/router';

export const testHistoryRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./test-history.component').then(m => m.TestHistoryComponent)
  }
];
