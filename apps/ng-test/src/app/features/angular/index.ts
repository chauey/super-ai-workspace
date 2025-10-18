/**
 * Angular Feature Module - Modern Angular 17+ Approach
 *
 * This replaces the old NgModule pattern with modern standalone components
 * and route configuration objects.
 *
 * Usage:
 * import { angularFeatureRoutes } from './features/angular';
 *
 * Then in your main routes:
 * { path: 'angular', children: angularFeatureRoutes }
 */

export { angularFeatureRoutes, angularLazyRoutes } from './angular-feature.config';
export { angularRoutes } from './angular.routes';
