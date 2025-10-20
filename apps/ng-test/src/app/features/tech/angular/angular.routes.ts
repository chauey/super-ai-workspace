import { Routes } from '@angular/router';

export const angularRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./angular.component').then(m => m.AngularComponent)
  },
  {
    path: '**',
    loadChildren: () => import('../../angular/angular.routes').then(m => m.angularRoutes)
  }
];
