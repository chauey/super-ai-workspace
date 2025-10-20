import { Routes } from '@angular/router';

export const utilitiesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./utilities.component').then(m => m.UtilitiesComponent)
  },
  {
    path: 'code-generators',
    loadComponent: () => import('./code-generators/code-generators.component').then(m => m.CodeGeneratorsComponent)
  },
  {
    path: 'formatters',
    loadComponent: () => import('./formatters/formatters.component').then(m => m.FormattersComponent)
  },
  {
    path: 'validators',
    loadComponent: () => import('./validators/validators.component').then(m => m.ValidatorsComponent)
  }
];
