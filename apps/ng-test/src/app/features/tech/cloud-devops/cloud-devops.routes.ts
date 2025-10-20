import { Routes } from '@angular/router';

export const cloudDevOpsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cloud-devops.component').then(m => m.CloudDevOpsComponent)
  }
];
