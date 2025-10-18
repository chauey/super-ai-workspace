# Angular Feature Module

This is a modern Angular 17+ feature module that replaces the old NgModule pattern with standalone components and route configuration objects.

## Structure

```
features/angular/
├── angular.routes.ts          # Route definitions for the angular feature
├── angular-feature.config.ts  # Feature module configuration
├── index.ts                   # Barrel exports for easy importing
└── README.md                  # This documentation
```

## Usage

### In your main app routes:

```typescript
import { Routes } from '@angular/router';
import { angularFeatureRoutes } from './features/angular';

export const routes: Routes = [
  { path: '', redirectTo: '/angular', pathMatch: 'full' },
  { path: 'angular', children: angularFeatureRoutes },
  // ... other routes
];
```

### Alternative: Lazy Loading

If you want to lazy load the entire angular feature:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'angular', 
    loadChildren: () => import('./features/angular').then(m => m.angularLazyRoutes)
  }
];
```

## Benefits of This Approach

1. **Modern Angular 17+**: Uses standalone components and route configuration instead of NgModules
2. **Tree-shakable**: Only imports what you need
3. **Lazy loading support**: Can be lazy loaded as a complete feature
4. **Easy to maintain**: All angular-related routes are encapsulated in one place
5. **Backward compatible**: Legacy routes redirect to new `/angular/` paths

## Route Structure

All routes are now under the `/angular/` prefix:

- `/angular/core-concepts/empty`
- `/angular/core-concepts/control-flow`
- `/angular/forms-data/reactive-forms`
- `/angular/architecture/dependency-injection`
- `/angular/advanced-features/pipes`
- `/angular/playground/testdome`

## Legacy Support

The main app routes include redirects for backward compatibility, so existing bookmarks and links will continue to work.
