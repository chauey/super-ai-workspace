import { Routes } from '@angular/router';

export const achievementsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./achievements.component').then(m => m.AchievementsComponent)
  }
];
