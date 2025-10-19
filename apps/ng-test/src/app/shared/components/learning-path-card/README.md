# Learning Path Card Component

A reusable, standalone Angular component for displaying feature cards on dashboards and landing pages.

## Overview

The Learning Path Card is a beautifully designed card component inspired by modern UI kits (like the screenshot provided). It features:

- ✨ Gradient top bar on hover
- 🏷️ Optional badges (New, Coming Soon)
- 🎨 Customizable icon colors
- 🏷️ Tag support
- 🎯 Multiple states (active, coming-soon, placeholder)
- 📱 Fully responsive
- 🌙 Dark mode support
- ♿ Accessible

## Installation

The component is located at `src/app/shared/components/learning-path-card/`.

```typescript
import { LearningPathCardComponent, LearningPathCard } from './shared/components/learning-path-card/learning-path-card.component';
```

## Usage

### Basic Example

```typescript
import { Component } from '@angular/core';
import { LearningPathCardComponent, LearningPathCard } from './shared/components/learning-path-card/learning-path-card.component';

@Component({
  standalone: true,
  imports: [LearningPathCardComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <app-learning-path-card [card]="designSystemCard" />
      <app-learning-path-card [card]="angularCard" />
      <app-learning-path-card [card]="dotnetCard" />
    </div>
  `
})
export class MyComponent {
  designSystemCard: LearningPathCard = {
    title: 'Design System',
    subtitle: 'UI Kit & Component Library',
    description: 'Comprehensive design system with AG Grid, Material components, colors, typography, and full theming support.',
    icon: 'palette',
    route: '/design-system',
    tags: ['10 Pages', 'AG Grid', 'Dark Mode'],
    badge: 'new',
    status: 'active'
  };

  angularCard: LearningPathCard = {
    title: 'Angular',
    subtitle: 'Modern Web Development',
    description: 'Master Angular with signals, reactive forms, services, routing, and advanced patterns with hands-on examples.',
    icon: 'code',
    iconColor: '#dd0031', // Custom Angular brand color
    route: '/angular',
    tags: ['15+ Pages', 'Signals', 'Best Practices'],
    status: 'active'
  };

  dotnetCard: LearningPathCard = {
    title: '.NET',
    subtitle: 'Backend Development',
    description: 'Learn C#, ASP.NET Core Web API, Entity Framework Core, Blazor, and modern .NET development patterns.',
    icon: 'terminal',
    route: '/dotnet',
    tags: ['C# 12', 'ASP.NET Core', 'Blazor'],
    badge: 'coming-soon',
    status: 'coming-soon',
    actionText: 'Preview →'
  };
}
```

### Dynamic Grid

```typescript
@Component({
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (card of cards; track card.title) {
        <app-learning-path-card [card]="card" />
      }
    </div>
  `
})
export class MyComponent {
  cards: LearningPathCard[] = [
    {
      title: 'Design System',
      subtitle: 'UI Kit & Component Library',
      description: 'Comprehensive design system...',
      icon: 'palette',
      route: '/design-system',
      tags: ['10 Pages', 'AG Grid', 'Dark Mode'],
      badge: 'new',
      status: 'active'
    },
    // ... more cards
  ];
}
```

## Interface

```typescript
export interface LearningPathCard {
  title: string;                  // Main card title
  subtitle: string;                // Secondary heading (displayed in uppercase)
  description: string;             // Card description text
  icon: string;                    // Material icon name (e.g., 'palette', 'code')
  iconColor?: string;              // CSS color for icon (default: var(--primary-color))
  route?: string;                  // Router link destination (optional)
  tags?: string[];                 // Array of tag labels to display
  badge?: 'new' | 'coming-soon' | null;  // Badge to show in top-right corner
  status?: 'active' | 'coming-soon' | 'placeholder';  // Card interaction state
  actionText?: string;             // Custom footer link text (default: "Explore →" or "Preview →")
}
```

## Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `title` | `string` | ✅ Yes | - | Main card title |
| `subtitle` | `string` | ✅ Yes | - | Secondary heading (shown in uppercase) |
| `description` | `string` | ✅ Yes | - | Card description text |
| `icon` | `string` | ✅ Yes | - | Material icon name |
| `iconColor` | `string` | ❌ No | `var(--primary-color)` | CSS color for the icon |
| `route` | `string` | ❌ No | `null` | Router link destination |
| `tags` | `string[]` | ❌ No | `[]` | Array of tag labels |
| `badge` | `'new' \| 'coming-soon' \| null` | ❌ No | `null` | Badge to display |
| `status` | `'active' \| 'coming-soon' \| 'placeholder'` | ❌ No | `'active'` | Card interaction state |
| `actionText` | `string` | ❌ No | Auto | Custom footer link text |

## Status States

### Active
```typescript
{ status: 'active' }
```
- Fully interactive
- Pronounced hover effect (lifts up 8px)
- Border color changes to primary on hover
- Default action text: "Explore →"

### Coming Soon
```typescript
{ status: 'coming-soon', badge: 'coming-soon' }
```
- Interactive but indicates future content
- Subtle hover effect (lifts up 4px)
- Default action text: "Preview →"

### Placeholder
```typescript
{ status: 'placeholder' }
```
- Dashed border
- Reduced opacity (0.6)
- No hover effects
- Non-clickable

## Badge Options

### New Badge
```typescript
{ badge: 'new' }
```
- Pink/accent colored badge
- Positioned in top-right corner
- Text: "New"

### Coming Soon Badge
```typescript
{ badge: 'coming-soon' }
```
- Orange/warning colored badge
- Positioned in top-right corner
- Text: "Coming Soon"

## Custom Icon Colors

```typescript
{
  icon: 'code',
  iconColor: '#dd0031'  // Angular brand color
}

{
  icon: 'palette',
  iconColor: 'var(--accent-color)'  // CSS variable
}

{
  icon: 'cloud',
  iconColor: '#0078d4'  // Azure blue
}
```

## Tags

Tags are displayed as small, pill-shaped badges below the description:

```typescript
{
  tags: ['10 Pages', 'AG Grid', 'Dark Mode']
}
```

## Examples

### Dashboard Learning Path
```typescript
{
  title: 'Design System',
  subtitle: 'UI Kit & Component Library',
  description: 'Comprehensive design system with AG Grid, Material components, colors, typography, and full theming support.',
  icon: 'palette',
  route: '/design-system',
  tags: ['10 Pages', 'AG Grid', 'Dark Mode'],
  badge: 'new',
  status: 'active'
}
```

### Coming Soon Feature
```typescript
{
  title: 'React',
  subtitle: 'JavaScript Library',
  description: 'Coming soon: React tutorials, hooks, context, and modern patterns.',
  icon: 'code',
  tags: ['Hooks', 'Context', 'Next.js'],
  badge: 'coming-soon',
  status: 'coming-soon'
}
```

### Custom Branding
```typescript
{
  title: 'Angular',
  subtitle: 'Modern Web Development',
  description: 'Master Angular with signals, reactive forms, and advanced patterns.',
  icon: 'code',
  iconColor: '#dd0031',  // Angular brand red
  route: '/angular',
  tags: ['Signals', 'Best Practices'],
  status: 'active'
}
```

### No Route (Display Only)
```typescript
{
  title: 'Feature Showcase',
  subtitle: 'Display Only',
  description: 'This card has no route and is for display purposes only.',
  icon: 'info',
  tags: ['Display', 'Non-clickable'],
  status: 'placeholder'
}
```

## Styling

The component uses:
- CSS custom properties for theming
- Tailwind CSS utilities (`@apply`)
- Angular Material icons
- Responsive breakpoints

### CSS Variables Used
- `--bg-card` - Card background
- `--border-color` - Card border
- `--primary-color` - Primary brand color
- `--accent-color` - Accent/secondary color
- `--warn-color` - Warning color
- `--text-primary` - Primary text color
- `--text-secondary` - Secondary text color
- `--bg-tertiary` - Tag background
- `--shadow-hover` - Elevated shadow on hover

## Responsive Design

```scss
// Mobile: Single column
grid-cols-1

// Tablet: 2 columns
md:grid-cols-2

// Desktop: 3 columns
lg:grid-cols-3
```

The component automatically adjusts:
- Icon size (3rem → 2rem on mobile)
- Title size (1.5rem → 1.25rem on mobile)
- Removes min-height on description for mobile

## Accessibility

- Semantic HTML (`<a>` for links)
- Proper ARIA labels from Material components
- Keyboard navigation support
- Focus indicators
- Color contrast compliant

## Live Demo

See the component in action:
1. Navigate to `/design-system/cards`
2. View multiple examples and states
3. See usage code and API documentation

## Where It's Used

- **Dashboard** (`/`) - Main learning paths grid
- **Front-End Landing** (`/front-end`) - Framework showcase
- **SaaS Landing** (`/saas`) - Application showcase
- **Design System** (`/design-system/cards`) - Component documentation

## Dependencies

- `@angular/common` - CommonModule
- `@angular/router` - RouterModule
- `@angular/material/chips` - MatChipsModule
- `@angular/material/icon` - MatIconModule

## Future Enhancements

Potential additions:
- [ ] Progress indicators
- [ ] Completion checkmarks
- [ ] Star ratings
- [ ] Author avatars
- [ ] Estimated time badges
- [ ] Difficulty levels
- [ ] Interactive preview on hover
- [ ] Animation variants

## Related Components

- **Info Card** - Simpler feature highlight card
- **Stat Card** - Numeric statistic display
- **Material Card** - Standard Angular Material cards

## Support

For issues or questions:
1. Check `/design-system/cards` for examples
2. Review this README
3. Check the Dashboard implementation for real-world usage

