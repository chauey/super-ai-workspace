import { Routes } from '@angular/router';
import { angularFeatureRoutes } from './features/angular/angular-feature.config';

export const routes: Routes = [
  { path: '', redirectTo: '/angular', pathMatch: 'full' },

  // Angular Feature Module - All routes under /angular/
  { path: 'angular', children: angularFeatureRoutes },

  // // Legacy routes for backward compatibility (redirect to new /angular/ paths)
  // { path: 'core-concepts/empty', redirectTo: '/angular/core-concepts/empty' },
  // { path: 'core-concepts/control-flow', redirectTo: '/angular/core-concepts/control-flow' },
  // { path: 'core-concepts/signals', redirectTo: '/angular/core-concepts/signals' },
  // { path: 'forms-data/reactive-forms', redirectTo: '/angular/forms-data/reactive-forms' },
  // { path: 'forms-data/reactive-forms-signals', redirectTo: '/angular/forms-data/reactive-forms-signals' },
  // { path: 'forms-data/http-client', redirectTo: '/angular/forms-data/http-client' },
  // { path: 'architecture/dependency-injection', redirectTo: '/angular/architecture/dependency-injection' },
  // { path: 'architecture/lifecycle-hooks', redirectTo: '/angular/architecture/lifecycle-hooks' },
  // { path: 'architecture/services', redirectTo: '/angular/architecture/services' },
  // { path: 'advanced-features/pipes', redirectTo: '/angular/advanced-features/pipes' },
  // { path: 'advanced-features/guards-interceptors', redirectTo: '/angular/advanced-features/guards-interceptors' },
  // { path: 'advanced-features/lazy-loading', redirectTo: '/angular/advanced-features/lazy-loading' },
  // { path: 'advanced-features/defer', redirectTo: '/angular/advanced-features/defer' },
  // { path: 'playground/testdome', redirectTo: '/angular/playground/testdome' },
  // { path: 'playground/testdome2', redirectTo: '/angular/playground/testdome2' },

  // // Legacy single-word routes for backward compatibility
  // { path: 'empty', redirectTo: '/angular/core-concepts/empty' },
  // { path: 'control-flow', redirectTo: '/angular/core-concepts/control-flow' },
  // { path: 'signals', redirectTo: '/angular/core-concepts/signals' },
  // { path: 'reactive-forms', redirectTo: '/angular/forms-data/reactive-forms' },
  // { path: 'reactive-forms-signals', redirectTo: '/angular/forms-data/reactive-forms-signals' },
  // { path: 'http-client', redirectTo: '/angular/forms-data/http-client' },
  // { path: 'dependency-injection', redirectTo: '/angular/architecture/dependency-injection' },
  // { path: 'lifecycle-hooks', redirectTo: '/angular/architecture/lifecycle-hooks' },
  // { path: 'services', redirectTo: '/angular/architecture/services' },
  // { path: 'pipes', redirectTo: '/angular/advanced-features/pipes' },
  // { path: 'guards-interceptors', redirectTo: '/angular/advanced-features/guards-interceptors' },
  // { path: 'lazy-loading', redirectTo: '/angular/advanced-features/lazy-loading' },
  // { path: 'defer', redirectTo: '/angular/advanced-features/defer' },
  // { path: 'testdome', redirectTo: '/angular/playground/testdome' },
  // { path: 'testdome2', redirectTo: '/angular/playground/testdome2' },

  { path: '**', redirectTo: '/angular' }
];
