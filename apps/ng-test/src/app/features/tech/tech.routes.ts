import { Routes } from '@angular/router';

export const techRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tech.component').then(m => m.TechComponent)
  },
  {
    path: 'front-end',
    loadChildren: () => import('./front-end/front-end.routes').then(m => m.frontEndRoutes)
  },
  {
    path: 'back-end',
    loadChildren: () => import('./back-end/back-end.routes').then(m => m.backEndRoutes)
  },
  {
    path: 'cloud-devops',
    loadChildren: () => import('./cloud-devops/cloud-devops.routes').then(m => m.cloudDevOpsRoutes)
  },
  {
    path: 'ai-machine-learning',
    loadChildren: () => import('./ai-machine-learning/ai-machine-learning.routes').then(m => m.aiMachineLearningRoutes)
  },
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.routes').then(m => m.angularRoutes)
  }
];
