import { Routes } from '@angular/router';

export const frontEndRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./front-end.component').then(m => m.FrontEndComponent)
  },
  {
    path: 'angular',
    loadChildren: () => import('../../angular/angular.routes').then(m => m.angularRoutes)
  },
  {
    path: 'react',
    loadComponent: () => import('../../../shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: 'vue',
    loadComponent: () => import('../../../shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
