# 🎨 Styling Architecture Guide

## Philosophy: Angular Material + Tailwind Harmony

This project uses a **hybrid approach** that leverages the strengths of each framework:

| Framework | Purpose | When to Use |
|-----------|---------|-------------|
| **Tailwind CSS** | Layout & Utilities | Spacing, flexbox, grid, responsive design, quick prototyping |
| **Angular Material** | UI Components | Buttons, forms, dialogs, menus, complex interactive components |
| **Custom CSS** | Theme Integration | Theme-aware utilities, domain-specific patterns, component styling |

## 📁 File Structure

```
src/
├── styles.scss                              # Global entry point
└── app/shared/styles/
    ├── _mixins.scss                         # SCSS mixins for component styles
    ├── utilities.scss                       # Custom theme-aware utilities
    └── components.scss                      # Reusable component classes
```

## 🎯 Usage Guidelines

### 1. **Layout: Use Tailwind**

```html
<!-- ✅ GOOD: Tailwind for layout -->
<div class="flex items-center justify-between p-4 gap-4">
  <div class="flex-1 max-w-4xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Content -->
    </div>
  </div>
</div>
```

### 2. **Interactive Components: Use Angular Material**

```html
<!-- ✅ GOOD: Material for interactive UI -->
<mat-form-field appearance="outline">
  <mat-label>Username</mat-label>
  <input matInput type="text" />
</mat-form-field>

<button mat-raised-button color="primary">Submit</button>

<mat-card>
  <mat-card-header>
    <mat-card-title>Title</mat-card-title>
  </mat-card-header>
  <mat-card-content>Content</mat-card-content>
</mat-card>
```

### 3. **Theme-Aware Content: Use Custom Utilities**

```html
<!-- ✅ GOOD: Custom utilities for theme-aware content -->
<div class="bg-card text-primary border-default rounded-lg shadow-themed p-6">
  <h1 class="text-2xl font-bold text-primary mb-4">Title</h1>
  <p class="text-secondary">Description</p>
</div>
```

### 4. **Component Styles: Use CSS Variables**

```typescript
@Component({
  styles: [`
    /* Theme-aware component styles */
    .custom-container {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow);
    }
  `]
})
```

## 🎨 Available Custom Classes

### Theme-Aware Backgrounds
- `.bg-card` - Primary surface (cards, modals)
- `.bg-content` - Secondary background (sections)
- `.bg-subtle` - Tertiary background (hover states)

### Theme-Aware Text
- `.text-primary` - Primary text color
- `.text-secondary` - Secondary text (labels, descriptions)
- `.text-disabled` - Disabled/muted text

### Theme-Aware Borders
- `.border-default` - Theme-aware border color

### Theme-Aware Shadows
- `.shadow-themed` - Standard shadow
- `.shadow-themed-hover` - Hover shadow

### Demo-Specific Utilities
- `.log-container` - For operation logs
- `.log-success`, `.log-error`, `.log-info` - Log entry types
- `.status-loading`, `.status-success`, `.status-error` - Status indicators

## ⚠️ Anti-Patterns (What NOT to Do)

### ❌ DON'T: Hardcode Colors in Components

```typescript
// ❌ BAD
@Component({
  styles: [`
    .container {
      background: white;  // Won't respect dark mode
      color: #333;
    }
  `]
})
```

### ❌ DON'T: Overuse Custom CSS

```html
<!-- ❌ BAD: Creating custom CSS when Tailwind exists -->
<style>
  .my-flex-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
</style>

<!-- ✅ GOOD: Use Tailwind -->
<div class="flex justify-between p-4">
```

### ❌ DON'T: Style Material Components Directly

```scss
// ❌ BAD: Override Material styles directly
.mat-mdc-button {
  background: blue !important;
}

// ✅ GOOD: Use Material's color system
```

```html
<button mat-raised-button color="primary">Button</button>
```

## 🔄 Migration Pattern

When you find hardcoded colors in existing components:

### Before:
```scss
.container {
  background: white;
  color: #333;
  border: 1px solid #ddd;
}
```

### After:
```scss
.container {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

**Or** use Tailwind + custom utilities:
```html
<div class="bg-card text-primary border-default">
```

## 🎯 Decision Tree

```
Need styling?
│
├─ Is it layout/spacing?
│  └─ Use Tailwind (flex, grid, p-4, m-2, etc.)
│
├─ Is it an interactive component?
│  └─ Use Angular Material (mat-button, mat-form-field, etc.)
│
├─ Does it need theme awareness?
│  ├─ Simple? Use custom utilities (.bg-card, .text-primary)
│  └─ Complex? Use CSS variables in component styles
│
└─ Is it app-specific logic?
   └─ Create custom class with CSS variables
```

## 📊 Examples by Use Case

### Example 1: Card with Form

```html
<!-- Layout: Tailwind -->
<div class="max-w-4xl mx-auto p-6">
  <!-- Theme-aware surface: Custom utility -->
  <div class="bg-card rounded-lg shadow-themed p-8">
    <!-- Typography: Tailwind + Custom -->
    <h2 class="text-2xl font-bold text-primary mb-4">User Profile</h2>
    
    <!-- Form: Angular Material -->
    <mat-form-field appearance="outline" class="w-full">
      <mat-label>Name</mat-label>
      <input matInput />
    </mat-form-field>
    
    <!-- Button: Angular Material -->
    <button mat-raised-button color="primary" class="mt-4">
      Save
    </button>
  </div>
</div>
```

### Example 2: Data Grid

```html
<!-- Layout: Tailwind -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards: Custom utility + Tailwind -->
  <div class="bg-card rounded-lg p-6 shadow-themed hover:shadow-themed-hover transition-shadow">
    <h3 class="text-lg font-semibold text-primary mb-2">Item Title</h3>
    <p class="text-secondary">Description here</p>
    
    <!-- Actions: Material -->
    <div class="mt-4 flex gap-2">
      <button mat-button color="primary">View</button>
      <button mat-button>Edit</button>
    </div>
  </div>
</div>
```

### Example 3: Status Messages

```html
<!-- Theme-aware status: Custom utility -->
<div class="status status-success">
  <mat-icon class="inline-block mr-2">check_circle</mat-icon>
  Operation completed successfully!
</div>

<div class="status status-error">
  <mat-icon class="inline-block mr-2">error</mat-icon>
  An error occurred. Please try again.
</div>
```

## 🚀 Benefits of This Approach

1. **✅ Consistent Theming** - All custom styles respect light/dark mode
2. **✅ Best of Both Worlds** - Tailwind speed + Material polish
3. **✅ Maintainable** - Clear separation of concerns
4. **✅ Scalable** - Easy to extend and modify
5. **✅ Type-Safe** - Leverages Angular's type system
6. **✅ Performant** - Minimal custom CSS, maximum utility reuse

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Angular Material Documentation](https://material.angular.io)
- [THEMING-GUIDE.md](./THEMING-GUIDE.md) - Complete theming documentation

