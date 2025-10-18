# 🎨 Styling Cheat Sheet

Quick reference for common styling patterns.

## 🎯 Quick Decision Guide

| Need | Use | Example |
|------|-----|---------|
| **Layout** | Tailwind | `class="flex items-center gap-4"` |
| **Spacing** | Tailwind | `class="p-6 m-4 space-y-4"` |
| **Button** | Material | `<button mat-raised-button color="primary">` |
| **Form** | Material | `<mat-form-field>` + `<input matInput>` |
| **Card** | Tailwind + Custom | `class="bg-card rounded-lg shadow-themed p-6"` |
| **Text Color** | Custom | `class="text-primary"` or `class="text-secondary"` |

## 📋 Common Patterns

### Card Component
```html
<div class="max-w-4xl mx-auto p-8">
  <div class="bg-card rounded-lg shadow-themed p-6 border border-default">
    <h2 class="text-2xl font-bold text-primary mb-4">Title</h2>
    <p class="text-secondary mb-6">Description</p>
    <button mat-raised-button color="primary">Action</button>
  </div>
</div>
```

### Form with Validation
```html
<mat-form-field appearance="outline" class="w-full">
  <mat-label>Email</mat-label>
  <input matInput type="email" formControlName="email" />
  <mat-error *ngIf="form.get('email')?.hasError('required')">
    Email is required
  </mat-error>
</mat-form-field>
```

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-card rounded-lg p-6">Card 1</div>
  <div class="bg-card rounded-lg p-6">Card 2</div>
  <div class="bg-card rounded-lg p-6">Card 3</div>
</div>
```

### Status Message
```html
<div class="status status-success">
  <mat-icon class="inline mr-2">check_circle</mat-icon>
  Success message
</div>
```

### Data Table
```html
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
```

## 🎨 Theme-Aware Classes

### Backgrounds
- `.bg-card` - Primary surface
- `.bg-content` - Secondary surface  
- `.bg-subtle` - Tertiary surface

### Text
- `.text-primary` - Main text
- `.text-secondary` - Labels/descriptions
- `.text-disabled` - Disabled text

### Borders & Shadows
- `.border-default` - Theme-aware border
- `.shadow-themed` - Theme-aware shadow

### Status
- `.status-success` - Green success message
- `.status-error` - Red error message
- `.status-warning` - Yellow warning message
- `.status-info` - Blue info message

## 🔧 CSS Variables (Component Styles)

```scss
.custom-element {
  background-color: var(--bg-primary);     // Surface color
  color: var(--text-primary);              // Text color
  border: 1px solid var(--border-color);   // Border color
  box-shadow: var(--shadow);               // Shadow
}
```

## 🎯 Tailwind + Custom Combo

```html
<!-- Layout (Tailwind) + Theme (Custom) -->
<div class="flex items-center justify-between p-6 bg-card rounded-lg shadow-themed">
  <!-- Typography (Tailwind) + Color (Custom) -->
  <h3 class="text-xl font-semibold text-primary">Title</h3>
  
  <!-- Material Component -->
  <button mat-icon-button>
    <mat-icon>more_vert</mat-icon>
  </button>
</div>
```

## 📱 Responsive Design

```html
<!-- Mobile first approach -->
<div class="
  grid 
  grid-cols-1       /* Mobile: 1 column */
  md:grid-cols-2    /* Tablet: 2 columns */
  lg:grid-cols-3    /* Desktop: 3 columns */
  gap-4             /* Always 1rem gap */
  p-4               /* Always 1rem padding */
  md:p-6            /* Tablet+: 1.5rem padding */
">
  <!-- Content -->
</div>
```

## 🚀 Performance Tips

1. **Prefer Tailwind** for simple utilities (faster, smaller bundle)
2. **Use Material** for complex interactions (better UX, accessibility)
3. **Minimize custom CSS** (harder to maintain)
4. **Reuse classes** (create custom utilities if pattern repeats 3+ times)

## ⚡ Quick Fixes

### Card not dark mode compatible?
```html
<!-- Before -->
<div class="bg-white text-gray-900">

<!-- After -->
<div class="bg-card text-primary">
```

### Button needs theme colors?
```html
<!-- Use Material's color system -->
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warning</button>
```

### Custom component needs theming?
```typescript
@Component({
  styles: [`
    .my-element {
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }
  `]
})
```

