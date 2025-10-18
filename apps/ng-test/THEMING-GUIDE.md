# 🎨 Enterprise Angular Theming Guide

## Overview

This application implements a comprehensive theming system that supports light, dark, and system-based themes following Angular and enterprise best practices.

## Architecture

### 1. Theme Service (`ThemeService`)

**Location:** `src/app/core/services/theme.service.ts`

**Responsibilities:**
- Manages theme state (light/dark/system)
- Persists user preference in localStorage
- Applies theme classes to DOM
- Watches for system theme changes

**Key Features:**
```typescript
// Default to system preference
private _theme = signal<Theme>('system');

// Computed dark mode detection
isDark = computed(() => {
  if (this._theme() === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return this._theme() === 'dark';
});

// Theme toggle cycle: light → dark → system → light
toggleTheme(): void {
  const current = this._theme();
  if (current === 'light') this.setTheme('dark');
  else if (current === 'dark') this.setTheme('system');
  else this.setTheme('light');
}
```

### 2. CSS Custom Properties

**Location:** `src/styles.scss`

**Design Pattern:** CSS Variables with fallbacks

```scss
:root {
  /* Brand Colors */
  --primary-color: #3f51b5;
  --accent-color: #ff4081;
  --warn-color: #f44336;
  
  /* Light Theme (Default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #e0e0e0;
  --text-primary: #212121;
  --text-secondary: #757575;
  --text-disabled: #9e9e9e;
  --border-color: #e0e0e0;
  --shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.dark {
  /* Dark Theme Overrides */
  --bg-primary: #1e1e1e;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #3d3d3d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-disabled: #6e6e6e;
  --border-color: #404040;
  --shadow: 0 2px 8px rgba(0,0,0,0.3);
}
```

### 3. Component Styling Best Practices

#### ✅ **DO: Use CSS Variables**

```typescript
@Component({
  selector: 'app-example',
  template: `<div class="container">...</div>`,
  styles: [`
    /* Theme-aware styles using CSS custom properties */
    /* Best Practice: Use CSS variables for all theme colors */
    
    .container {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }
    
    h1 {
      color: var(--text-primary);
    }
    
    .card {
      background-color: var(--bg-secondary);
      box-shadow: var(--shadow);
    }
  `]
})
```

#### ❌ **DON'T: Hardcode Colors**

```typescript
// ❌ BAD - Won't respect theme changes
styles: [`
  .container {
    background: white;
    color: #333;
  }
`]
```

### 4. Available CSS Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--bg-primary` | `#ffffff` | `#1e1e1e` | Main backgrounds (cards, modals) |
| `--bg-secondary` | `#f5f5f5` | `#2d2d2d` | Secondary backgrounds (sections) |
| `--bg-tertiary` | `#e0e0e0` | `#3d3d3d` | Tertiary backgrounds (hover states) |
| `--text-primary` | `#212121` | `#ffffff` | Primary text |
| `--text-secondary` | `#757575` | `#b0b0b0` | Secondary text (descriptions) |
| `--text-disabled` | `#9e9e9e` | `#6e6e6e` | Disabled text |
| `--border-color` | `#e0e0e0` | `#404040` | Borders and dividers |
| `--shadow` | Light shadow | Dark shadow | Box shadows |
| `--primary-color` | `#3f51b5` | `#3f51b5` | Primary brand color |
| `--accent-color` | `#ff4081` | `#ff4081` | Accent color |
| `--warn-color` | `#f44336` | `#f44336` | Warning/error color |

### 5. Tailwind Integration

**Configuration:** `tailwind.config.js`

```javascript
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  // ...
}
```

**Global Overrides:** `src/styles.scss`

Hardcoded Tailwind classes are automatically converted in dark mode:

```scss
.dark {
  .bg-white { background-color: var(--bg-primary) !important; }
  .text-gray-800 { color: var(--text-primary) !important; }
  .bg-gray-100 { background-color: var(--bg-tertiary) !important; }
  // ... etc
}
```

### 6. Material Design Integration

All Angular Material components automatically respect the theme through global overrides:

```scss
.dark {
  .mat-mdc-card {
    background-color: var(--bg-primary) !important;
    color: var(--text-primary) !important;
  }
  
  .mat-mdc-list-item {
    color: var(--text-primary) !important;
  }
}
```

## Implementation Checklist

When creating a new component:

- [ ] Use CSS variables for all colors
- [ ] Add theme-aware comment in styles
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Test in system mode
- [ ] Verify on theme toggle

### Example Component Template

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-feature',
  standalone: true,
  template: `
    <div class="feature-container">
      <h1>Feature Title</h1>
      <p>Feature description</p>
    </div>
  `,
  styles: [`
    /* Theme-aware styles using CSS custom properties */
    /* Best Practice: Use CSS variables for all theme colors */
    
    .feature-container {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: var(--shadow);
    }
    
    h1 {
      color: var(--text-primary);
      margin-bottom: 1rem;
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  `]
})
export class NewFeatureComponent {}
```

## Maintenance

### Migration Script

To automatically convert hardcoded colors to CSS variables:

```bash
npm run theme:migrate
```

Or manually:

```bash
node scripts/apply-theme-variables.js
```

### Adding New Theme Variables

1. Add to `:root` in `src/styles.scss`
2. Add dark mode override in `.dark` block
3. Document in this guide
4. Use in components

## Benefits

✅ **Consistent**: Single source of truth for all colors  
✅ **Maintainable**: Change theme colors in one place  
✅ **Accessible**: Respects user's system preferences  
✅ **Performance**: CSS variables are fast and efficient  
✅ **Future-proof**: Easy to add new themes (e.g., high contrast)  
✅ **Best Practice**: Follows Angular and enterprise patterns  

## Resources

- [Angular Material Theming](https://material.angular.io/guide/theming)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

