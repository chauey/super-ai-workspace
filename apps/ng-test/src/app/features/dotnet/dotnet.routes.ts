import { Routes } from '@angular/router';

export const dotnetRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dotnet.component').then((m) => m.DotnetComponent),
  },
];

