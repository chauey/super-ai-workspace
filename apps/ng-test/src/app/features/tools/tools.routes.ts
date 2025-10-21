import { Routes } from '@angular/router';

export const toolsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tools.component').then(m => m.ToolsComponent)
  },
  {
    path: 'utilities',
    loadChildren: () => import('./utilities/utilities.routes').then(m => m.utilitiesRoutes)
  },
  {
    path: 'integrations',
    loadChildren: () => import('./integrations/integrations.routes').then(m => m.integrationsRoutes)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.routes').then(m => m.settingsRoutes)
  }
];



