# Dark Mode Best Practices - Component Styling Guide

> **📚 Also See:**
> - [STYLING-ARCHITECTURE.md](../../../../STYLING-ARCHITECTURE.md) - Complete styling philosophy
> - [STYLING-CHEATSHEET.md](../../../../STYLING-CHEATSHEET.md) - Quick reference
> - [THEMING-GUIDE.md](../../../../THEMING-GUIDE.md) - Theming system details

## 🎨 Overview

This guide provides the best practices for creating components that automatically respect dark mode without needing to add `dark:` classes everywhere.

## ✅ Recommended Approach

### 1. Use Custom Tailwind Utilities (Best for simple cases)

Instead of:
```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
```

Use:
```html
<div class="bg-card text-primary">
```

**Available Utilities:**
- `bg-card` - Card/surface background
- `bg-content` - Content area background
- `text-primary` - Primary text color
- `text-secondary` - Secondary/muted text color
- `border-default` - Border color

### 2. Use Reusable CSS Classes (Best for complex components)

Import the shared styles in your component:
```typescript
@Component({
  selector: 'app-my-component',
  standalone: true,
  template: `
    <div class="page-content">
      <h1 class="heading-1">My Title</h1>
      <p class="text-body">Content here</p>
    </div>
  `
})
```

**Available Classes:**
- **Containers:** `.card`, `.page-container`, `.page-content`, `.section`
- **Typography:** `.heading-1`, `.heading-2`, `.heading-3`, `.text-body`, `.text-muted`
- **Buttons:** `.btn`, `.btn-primary`
- **Forms:** `.form-group`
- **Lists:** `.list`
- **Tables:** `.table`
- **Alerts:** `.alert`, `.alert-info`, `.alert-success`, `.alert-warning`, `.alert-error`
- **Code:** `.code-block`

### 3. Use CSS Variables Directly (Best for custom styling)

```typescript
@Component({
  selector: 'app-custom',
  template: `<div class="custom-card">Content</div>`,
  styles: [`
    .custom-card {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 2rem;
    }
  `]
})
```

**Available CSS Variables:**
- Colors:
  - `--primary-color` - Primary brand color (#3f51b5)
  - `--accent-color` - Accent color (#ff4081)
  - `--warn-color` - Warning/error color (#f44336)
  - `--success-color` - Success color (#4caf50)
  - `--warning-color` - Warning color (#ff9800)
  - `--info-color` - Info color (#2196f3)

- Backgrounds (changes with theme):
  - `--bg-primary` - Primary surface (white/dark)
  - `--bg-secondary` - Secondary background (light gray/darker)
  - `--bg-tertiary` - Tertiary background (lighter gray/lighter dark)

- Text (changes with theme):
  - `--text-primary` - Primary text
  - `--text-secondary` - Secondary/muted text
  - `--text-disabled` - Disabled text

- Borders & Shadows:
  - `--border-color` - Default border color
  - `--shadow` - Default box shadow
  - `--shadow-hover` - Hover box shadow

## 🚫 What NOT to Do

### ❌ DON'T hardcode colors in component styles:
```typescript
// BAD - Hardcoded white background won't respect dark mode
@Component({
  styles: [`
    .container {
      background: white;
      color: #333;
    }
  `]
})
```

### ✅ DO use CSS variables in component styles:
```typescript
// GOOD - Uses CSS variables that respect dark mode
@Component({
  styles: [`
    .container {
      background: var(--bg-primary, white);
      color: var(--text-primary, #333);
    }
  `]
})
```

### ❌ DON'T hardcode colors in templates:
```html
<!-- BAD -->
<div class="bg-white text-gray-900">
<div style="background: white; color: black;">
```

### ❌ DON'T use dark: everywhere:
```html
<!-- AVOID (maintenance nightmare) -->
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700">
```

### ✅ DO use semantic classes:
```html
<!-- GOOD -->
<div class="bg-card text-primary border-default">
```

## 📝 Examples

### Example 1: Simple Page Component
```typescript
@Component({
  template: `
    <div class="page-content">
      <h1 class="heading-1">{{ title }}</h1>
      <p class="text-body">{{ description }}</p>
    </div>
  `
})
```

### Example 2: Card with Custom Styling
```typescript
@Component({
  template: `
    <div class="card">
      <h2 class="heading-2">Card Title</h2>
      <p class="text-muted">Card description</p>
    </div>
  `
})
```

### Example 3: Form Component
```typescript
@Component({
  template: `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" placeholder="Enter name">
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  `
})
```

### Example 4: Data Table
```typescript
@Component({
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Item 1</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>
  `
})
```

## 🔧 Configuration

### Tailwind Dark Mode
The app is configured to use **class-based dark mode** in `tailwind.config.js`:
```js
module.exports = {
  darkMode: 'class', // Uses .dark class on root element
  // ...
}
```

### Theme Service
The app uses `ThemeService` to manage theme state:
- `light` - Light theme
- `dark` - Dark theme
- `system` - Follows OS preference

The service automatically applies the `.dark` class to `document.documentElement` when dark mode is active.

## 🎯 Benefits

1. **Consistency**: All components use the same color system
2. **Maintainability**: Change theme colors in one place
3. **Automatic Dark Mode**: Components automatically adapt to theme changes
4. **Less Code**: No need for `dark:` classes everywhere
5. **Type Safety**: CSS variables are defined in one place

## 📚 Additional Resources

- See `components.scss` for all available utility classes
- See `styles.scss` for CSS variable definitions
- See `theme.service.ts` for theme management logic
