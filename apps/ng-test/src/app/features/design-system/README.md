# 🎨 Design System Feature Module

## Overview

A comprehensive, lazy-loaded UI Kit / Design System / Style Guide showcasing all main components, patterns, and guidelines following Angular + Material + Tailwind best practices.

## Features

### ✅ Fully Lazy Loaded
- Entire design system is lazy loaded for optimal performance
- Uses Angular's `loadChildren` for route-based code splitting
- Components load on-demand as user navigates

### 🎯 Comprehensive Coverage

| Category | Components | Description |
|----------|------------|-------------|
| **Overview** | Dashboard | Quick navigation and statistics |
| **Colors** | Palette showcase | Brand, theme, and text colors with CSS variables |
| **Typography** | Headings, body text | Font sizes, weights, and text styles |
| **Icons** | Material icons | 24+ common icons with usage examples |
| **Buttons** | 5+ variants | Basic, raised, stroked, icon, and FAB buttons |
| **Forms** | All input types | Text, select, checkbox, radio, toggle |
| **Cards** | Material & Custom | Various card layouts and patterns |
| **Layouts** | Grid patterns | Responsive grid and flex layouts |
| **Data Grids** | AG Grid | Fully integrated AG Grid with theme support |
| **Theming** | Dark mode | Live theme switching and documentation |

### 🏗️ Architecture

```
design-system/
├── design-system.component.ts      # Main shell with navigation
├── design-system.routes.ts         # Lazy-loaded routes
├── pages/
│   ├── overview/                   # Dashboard & quick links
│   ├── colors/                     # Color palette showcase
│   ├── typography/                 # Typography system
│   ├── icons/                      # Icon library
│   ├── buttons/                    # Button variants
│   ├── forms/                      # Form components
│   ├── cards/                      # Card layouts
│   ├── layouts/                    # Layout patterns
│   ├── grids/                      # AG Grid integration
│   └── theming/                    # Theme control & docs
└── README.md                       # This file
```

### 🚀 Key Technologies

1. **AG Grid** - Enterprise-grade data grid with:
   - Sorting & filtering
   - Pagination
   - Row selection
   - CSV export
   - Automatic theme integration (light/dark)
   - 50+ sample rows for testing

2. **Angular Material** - All major components:
   - Buttons (basic, raised, stroked, icon, FAB)
   - Forms (input, select, checkbox, radio, toggle)
   - Cards (with headers, images, avatars)
   - Icons (Material Icons library)
   - Tabs (for navigation)

3. **Tailwind CSS** - Layout utilities:
   - Responsive grids
   - Flex layouts
   - Spacing utilities
   - Custom theme-aware classes

4. **CSS Variables** - Theme system:
   - Automatic light/dark mode
   - Consistent color usage
   - Easy customization

## Usage

### Access the Design System

Navigate to: `/angular/design-system`

The design system is accessible from the main navigation menu with a "New" badge.

### Adding to Navigation

Already configured in `apps/ng-test/src/assets/navigation.json`:

```json
{
  "id": "design-system",
  "title": "Design System",
  "icon": "palette",
  "tooltip": "UI Kit, style guide, and component library",
  "badge": "New",
  "badgeColor": "accent",
  "children": [ /* 10 sub-pages */ ]
}
```

### Route Configuration

Lazy loaded in `apps/ng-test/src/app/features/angular/angular.routes.ts`:

```typescript
{
  path: 'design-system',
  loadChildren: () => 
    import('../../angular/design-system/design-system.routes')
      .then(m => m.designSystemRoutes)
}
```

## AG Grid Integration

### Installation

```bash
npm install --save ag-grid-angular ag-grid-community
```

### Global Styles

Added to `apps/ng-test/src/styles.scss`:

```scss
@import 'ag-grid-community/styles/ag-grid.css';
@import 'ag-grid-community/styles/ag-theme-alpine.css';
```

### Theme Support

AG Grid automatically adapts to light/dark mode:

```typescript
// In component
themeClass = '';

ngOnInit() {
  this.updateTheme();
  this.watchThemeChanges();
}

updateTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  this.themeClass = isDark ? 'ag-theme-alpine-dark' : 'ag-theme-alpine';
}

watchThemeChanges() {
  const observer = new MutationObserver(() => this.updateTheme());
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
}
```

### Usage Example

```html
<ag-grid-angular
  [class]="themeClass"
  style="height: 500px;"
  [rowData]="rowData"
  [columnDefs]="columnDefs"
  [pagination]="true"
  [rowSelection]="'multiple'"
  (gridReady)="onGridReady($event)"
>
</ag-grid-angular>
```

## Best Practices

### ✅ DO

1. **Use Lazy Loading** for feature modules
2. **Follow the Architecture** - Tailwind for layout, Material for components, Custom for theming
3. **Use CSS Variables** for all colors
4. **Make Components Responsive** - Test on mobile, tablet, desktop
5. **Document Usage** - Include code examples in showcase pages
6. **Keep it Updated** - Add new components as they're created

### ❌ DON'T

1. Don't hardcode colors - use CSS variables
2. Don't duplicate components - reference the design system
3. Don't skip accessibility - use Material's built-in support
4. Don't forget dark mode - test both themes

## Extending the Design System

### Adding a New Page

1. Create the component:
```typescript
// pages/my-feature/my-feature.component.ts
@Component({
  selector: 'app-my-feature',
  standalone: true,
  template: `...`,
})
export class MyFeatureComponent {}
```

2. Add to routes:
```typescript
// design-system.routes.ts
{
  path: 'my-feature',
  loadComponent: () => 
    import('./pages/my-feature/my-feature.component')
      .then(m => m.MyFeatureComponent)
}
```

3. Add to navigation:
```typescript
// design-system.component.ts
navLinks = [
  // ...
  { path: 'my-feature', label: 'My Feature', icon: 'star' }
];
```

4. Update navigation.json:
```json
{
  "id": "ds-my-feature",
  "title": "My Feature",
  "icon": "star",
  "route": "/angular/design-system/my-feature",
  "tooltip": "My custom feature"
}
```

## Performance

- **Lazy Loading**: Design system loads only when accessed
- **Code Splitting**: Each page loads independently
- **Tree Shaking**: Unused code is eliminated
- **Optimal Bundle Size**: Only imports what's needed

## Accessibility

All components follow Material Design accessibility guidelines:
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management
- Color contrast (WCAG AA compliant)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Resources

- [Angular Material Docs](https://material.angular.io)
- [AG Grid Angular Docs](https://www.ag-grid.com/angular-data-grid/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [STYLING-ARCHITECTURE.md](../../../STYLING-ARCHITECTURE.md)
- [THEMING-GUIDE.md](../../../THEMING-GUIDE.md)

## Maintenance

### Regular Updates

- Review and update components quarterly
- Add new Material components as they're released
- Keep AG Grid updated for security patches
- Update documentation when patterns change

### Quality Checks

- [ ] All components render correctly in light/dark mode
- [ ] All links work correctly
- [ ] Code examples are accurate
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Accessibility compliant

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Maintainer:** Development Team

