import { Routes } from '@angular/router';

export const buildRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./build.component').then(m => m.BuildComponent)
  },
  {
    path: 'design-system',
    loadChildren: () => import('../design-system/design-system.routes').then(m => m.designSystemRoutes)
  },
  {
    path: 'development-tools',
    loadChildren: () => import('./development-tools/development-tools.routes').then(m => m.developmentToolsRoutes)
  }
];
