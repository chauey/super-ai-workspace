import { Routes } from '@angular/router';

export const frontEndRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./front-end.component').then(m => m.FrontEndComponent)
  }
];
