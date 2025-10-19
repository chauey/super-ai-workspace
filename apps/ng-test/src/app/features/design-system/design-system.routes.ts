import { Routes } from '@angular/router';

export const designSystemRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./design-system.component').then((m) => m.DesignSystemComponent),
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/overview/overview.component').then((m) => m.OverviewComponent),
      },
      {
        path: 'colors',
        loadComponent: () =>
          import('./pages/colors/colors.component').then((m) => m.ColorsComponent),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./pages/typography/typography.component').then((m) => m.TypographyComponent),
      },
      {
        path: 'icons',
        loadComponent: () =>
          import('./pages/icons/icons.component').then((m) => m.IconsComponent),
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./pages/buttons/buttons.component').then((m) => m.ButtonsComponent),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./pages/forms/forms.component').then((m) => m.FormsShowcaseComponent),
      },
      {
        path: 'cards',
        loadComponent: () =>
          import('./pages/cards/cards.component').then((m) => m.CardsComponent),
      },
      {
        path: 'badges',
        loadComponent: () =>
          import('./pages/badges/badges.component').then((m) => m.BadgesComponent),
      },
      {
        path: 'layouts',
        loadComponent: () =>
          import('./pages/layouts/layouts.component').then((m) => m.LayoutsComponent),
      },
      {
        path: 'grids',
        loadComponent: () =>
          import('./pages/grids/grids.component').then((m) => m.GridsComponent),
      },
      {
        path: 'theming',
        loadComponent: () =>
          import('./pages/theming/theming.component').then((m) => m.ThemingComponent),
      },
    ],
  },
];

