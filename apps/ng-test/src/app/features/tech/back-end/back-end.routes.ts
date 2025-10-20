import { Routes } from '@angular/router';

export const backEndRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./back-end.component').then(m => m.BackEndComponent)
  }
];
