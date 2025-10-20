import { Routes } from '@angular/router';

export const studyMaterialsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./study-materials.component').then(m => m.StudyMaterialsComponent)
  }
];
