import { Route } from '@angular/router';
import { angularRoutes } from './angular.routes';

/**
 * Angular Feature Module Configuration
 *
 * This is the modern Angular 17+ way to create feature modules.
 * Instead of NgModules, we use route configuration objects that can be
 * easily imported and used in the main application.
 *
 * Usage in main app.routes.ts:
 * import { angularFeatureRoutes } from './features/angular/angular-feature.config';
 *
 * Then add to your main routes:
 * { path: 'angular', children: angularFeatureRoutes }
 */
export const angularFeatureRoutes: Route[] = [
  {
    path: '',
    children: angularRoutes
  }
];

/**
 * Alternative: Direct route configuration for lazy loading
 * This can be used if you want to lazy load the entire angular feature
 */
export const angularLazyRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./angular.routes').then(m => m.angularRoutes)
  }
];
