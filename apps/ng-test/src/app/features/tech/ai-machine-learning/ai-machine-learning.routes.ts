import { Routes } from '@angular/router';

export const aiMachineLearningRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./ai-machine-learning.component').then(m => m.AiMachineLearningComponent)
  }
];
