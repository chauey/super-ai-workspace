import { Routes } from '@angular/router';

export const showcaseRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./showcase.component').then(m => m.ShowcaseComponent)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.routes').then(m => m.portfolioRoutes)
  },
  {
    path: 'demos',
    loadChildren: () => import('./demos/demos.routes').then(m => m.demosRoutes)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./achievements/achievements.routes').then(m => m.achievementsRoutes)
  }
];
