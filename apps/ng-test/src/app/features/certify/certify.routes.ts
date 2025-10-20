import { Routes } from '@angular/router';

export const certifyRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./certify.component').then(m => m.CertifyComponent)
  },
  {
    path: 'practice-tests',
    loadChildren: () => import('./practice-tests/practice-tests.routes').then(m => m.practiceTestsRoutes)
  },
  {
    path: 'study-materials',
    loadChildren: () => import('./study-materials/study-materials.routes').then(m => m.studyMaterialsRoutes)
  },
  {
    path: 'test-history',
    loadChildren: () => import('./test-history/test-history.routes').then(m => m.testHistoryRoutes)
  }
];


