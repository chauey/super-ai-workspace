import { Routes } from '@angular/router';

// Eagerly loaded components (imported directly)
import { EmptyComponent } from './pages/core-concepts/empty.component';
import { ControlFlowComponent } from './pages/core-concepts/control-flow.component';

export const angularRoutes: Routes = [
  { path: '', redirectTo: 'core-concepts', pathMatch: 'full' },

  // CORE CONCEPTS - Landing Page
  { path: 'core-concepts', loadComponent: () => import('./pages/core-concepts/core-concepts-landing.component').then(m => m.CoreConceptsLandingComponent) },
  { path: 'core-concepts/empty', component: EmptyComponent },
  { path: 'core-concepts/control-flow', component: ControlFlowComponent },
  { path: 'core-concepts/signals', loadComponent: () => import('./pages/core-concepts/signals.component').then(m => m.SignalsComponent) },

  // FORMS & DATA - Landing Page
  { path: 'forms-data', loadComponent: () => import('./pages/forms-data/forms-data-landing.component').then(m => m.FormsDataLandingComponent) },
  { path: 'forms-data/reactive-forms', loadComponent: () => import('./pages/forms-data/reactive-forms.component').then(m => m.ReactiveFormsComponent) },
  { path: 'forms-data/reactive-forms-signals', loadComponent: () => import('./pages/forms-data/reactive-forms-signals.component').then(m => m.ReactiveFormsSignalsComponent) },
  { path: 'forms-data/http-client', loadComponent: () => import('./pages/forms-data/http-client.component').then(m => m.HttpClientComponent) },

  // ARCHITECTURE - Landing Page
  { path: 'architecture', loadComponent: () => import('./pages/architecture/architecture-landing.component').then(m => m.ArchitectureLandingComponent) },
  { path: 'architecture/dependency-injection', loadComponent: () => import('./pages/architecture/dependency-injection.component').then(m => m.DependencyInjectionComponent) },
  { path: 'architecture/lifecycle-hooks', loadComponent: () => import('./pages/architecture/lifecycle-hooks.component').then(m => m.LifecycleHooksComponent) },
  { path: 'architecture/services', loadComponent: () => import('./pages/architecture/services.component').then(m => m.ServicesComponent) },

  // ADVANCED FEATURES - Landing Page
  { path: 'advanced-features', loadComponent: () => import('./pages/advanced-features/advanced-features-landing.component').then(m => m.AdvancedFeaturesLandingComponent) },
  { path: 'advanced-features/pipes', loadComponent: () => import('./pages/advanced-features/pipes.component').then(m => m.PipesComponent) },
  { path: 'advanced-features/guards-interceptors', loadComponent: () => import('./pages/advanced-features/guards-interceptors.component').then(m => m.GuardsInterceptorsComponent) },
  { path: 'advanced-features/lazy-loading', loadComponent: () => import('./pages/advanced-features/lazy-loading.component').then(m => m.LazyLoadingComponent) },
  { path: 'advanced-features/defer', loadComponent: () => import('./pages/advanced-features/defer.component').then(m => m.DeferComponent) },

  // PLAYGROUND
  { path: 'playground/testdome', loadComponent: () => import('./pages/playground/testdome.component').then(m => m.TestdomeComponent) },
  { path: 'playground/testdome2', loadComponent: () => import('./pages/playground/testdome2.component').then(m => m.Testdome2Component) },

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
