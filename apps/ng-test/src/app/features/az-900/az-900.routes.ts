import { Routes } from '@angular/router';

export const az900Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./az-900.component').then((m) => m.Az900Component),
  },
];

