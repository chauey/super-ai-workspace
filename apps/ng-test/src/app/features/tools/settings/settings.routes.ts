import { Routes } from '@angular/router';

export const settingsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./settings.component').then(m => m.SettingsComponent)
  },
  {
    path: 'theme-configuration',
    loadComponent: () => import('./theme-configuration/theme-configuration.component').then(m => m.ThemeConfigurationComponent)
  },
  {
    path: 'layout-preferences',
    loadComponent: () => import('./layout-preferences/layout-preferences.component').then(m => m.LayoutPreferencesComponent)
  },
  {
    path: 'user-preferences',
    loadComponent: () => import('./user-preferences/user-preferences.component').then(m => m.UserPreferencesComponent)
  }
];



