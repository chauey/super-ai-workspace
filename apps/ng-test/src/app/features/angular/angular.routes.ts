import { Routes } from '@angular/router';

// Eagerly loaded components (imported directly)
import { EmptyComponent } from '../../angular/core-concepts/empty.component';
import { ControlFlowComponent } from '../../angular/core-concepts/control-flow.component';

export const angularRoutes: Routes = [
  { path: '', redirectTo: 'core-concepts/empty', pathMatch: 'full' },

  // CORE CONCEPTS
  { path: 'core-concepts/empty', component: EmptyComponent },
  { path: 'core-concepts/control-flow', component: ControlFlowComponent },
  { path: 'core-concepts/signals', loadComponent: () => import('../../angular/core-concepts/signals.component').then(m => m.SignalsComponent) },

  // FORMS & DATA
  { path: 'forms-data/reactive-forms', loadComponent: () => import('../../angular/forms-data/reactive-forms.component').then(m => m.ReactiveFormsComponent) },
  { path: 'forms-data/reactive-forms-signals', loadComponent: () => import('../../angular/forms-data/reactive-forms-signals.component').then(m => m.ReactiveFormsSignalsComponent) },
  { path: 'forms-data/http-client', loadComponent: () => import('../../angular/forms-data/http-client.component').then(m => m.HttpClientComponent) },

  // ARCHITECTURE
  { path: 'architecture/dependency-injection', loadComponent: () => import('../../angular/architecture/dependency-injection.component').then(m => m.DependencyInjectionComponent) },
  { path: 'architecture/lifecycle-hooks', loadComponent: () => import('../../angular/architecture/lifecycle-hooks.component').then(m => m.LifecycleHooksComponent) },
  { path: 'architecture/services', loadComponent: () => import('../../angular/architecture/services.component').then(m => m.ServicesComponent) },

  // ADVANCED FEATURES
  { path: 'advanced-features/pipes', loadComponent: () => import('../../angular/advanced-features/pipes.component').then(m => m.PipesComponent) },
  { path: 'advanced-features/guards-interceptors', loadComponent: () => import('../../angular/advanced-features/guards-interceptors.component').then(m => m.GuardsInterceptorsComponent) },
  { path: 'advanced-features/lazy-loading', loadComponent: () => import('../../angular/advanced-features/lazy-loading.component').then(m => m.LazyLoadingComponent) },
  { path: 'advanced-features/defer', loadComponent: () => import('../../angular/advanced-features/defer.component').then(m => m.DeferComponent) },

  // PLAYGROUND
  { path: 'playground/testdome', loadComponent: () => import('../../angular/playground/testdome.component').then(m => m.TestdomeComponent) },
  { path: 'playground/testdome2', loadComponent: () => import('../../angular/playground/testdome2.component').then(m => m.Testdome2Component) },

  // Legacy routes for backward compatibility
  { path: 'empty', redirectTo: 'core-concepts/empty' },
  { path: 'control-flow', redirectTo: 'core-concepts/control-flow' },
  { path: 'signals', redirectTo: 'core-concepts/signals' },
  { path: 'reactive-forms', redirectTo: 'forms-data/reactive-forms' },
  { path: 'reactive-forms-signals', redirectTo: 'forms-data/reactive-forms-signals' },
  { path: 'http-client', redirectTo: 'forms-data/http-client' },
  { path: 'dependency-injection', redirectTo: 'architecture/dependency-injection' },
  { path: 'lifecycle-hooks', redirectTo: 'architecture/lifecycle-hooks' },
  { path: 'services', redirectTo: 'architecture/services' },
  { path: 'pipes', redirectTo: 'advanced-features/pipes' },
  { path: 'guards-interceptors', redirectTo: 'advanced-features/guards-interceptors' },
  { path: 'lazy-loading', redirectTo: 'advanced-features/lazy-loading' },
  { path: 'defer', redirectTo: 'advanced-features/defer' },
  { path: 'testdome', redirectTo: 'playground/testdome' },
  { path: 'testdome2', redirectTo: 'playground/testdome2' },

  { path: '**', redirectTo: 'core-concepts/empty' }
];
