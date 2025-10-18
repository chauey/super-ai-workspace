import { Routes } from '@angular/router';

export const ai900Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ai-900.component').then((m) => m.Ai900Component),
  },
];

