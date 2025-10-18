# 🎨 Styling System Documentation

## Quick Start

This project uses a **hybrid styling approach** combining:
- **Tailwind CSS** for layout and utilities
- **Angular Material** for UI components
- **Custom CSS** with theme awareness

## 📚 Documentation

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **[STYLING-CHEATSHEET.md](./STYLING-CHEATSHEET.md)** | Quick reference for common patterns | Every time you code |
| **[STYLING-ARCHITECTURE.md](./STYLING-ARCHITECTURE.md)** | Complete architecture guide | When onboarding |
| **[THEMING-GUIDE.md](./THEMING-GUIDE.md)** | Theme system deep dive | When working with themes |
| **[shared/styles/README.md](./src/app/shared/styles/README.md)** | Component styling best practices | When creating components |

## 🚀 Quick Examples

### Basic Card
```html
<div class="max-w-4xl mx-auto p-6">
  <div class="bg-card rounded-lg shadow-themed p-8">
    <h2 class="text-2xl font-bold text-primary mb-4">Title</h2>
    <p class="text-secondary">Content</p>
  </div>
</div>
```

### Form with Material
```html
<mat-form-field appearance="outline" class="w-full">
  <mat-label>Email</mat-label>
  <input matInput type="email" />
</mat-form-field>
<button mat-raised-button color="primary">Submit</button>
```

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-card p-6 rounded-lg">Card 1</div>
  <div class="bg-card p-6 rounded-lg">Card 2</div>
  <div class="bg-card p-6 rounded-lg">Card 3</div>
</div>
```

## ⚡ Key Principles

1. **Layout = Tailwind** (`flex`, `grid`, `p-4`, responsive classes)
2. **Components = Material** (`mat-button`, `mat-form-field`, `mat-card`)
3. **Theming = Custom** (`bg-card`, `text-primary`, CSS variables)

## 🎯 Decision Flow

```
Need to style something?
    ↓
Is it layout/spacing? → Use Tailwind (flex, p-4, m-2)
    ↓
Is it a button/form/menu? → Use Angular Material
    ↓
Need theme colors? → Use custom utilities (bg-card, text-primary)
    ↓
Custom logic? → Use CSS variables (var(--bg-primary))
```

## 📋 File Organization

```
src/
├── styles.scss                          # Global entry point
└── app/shared/styles/
    ├── _mixins.scss                     # SCSS mixins
    ├── utilities.scss                   # Theme-aware utilities
    ├── components.scss                  # Reusable components
    └── common.scss                      # Legacy (deprecated)
```

## 🎨 Available Custom Classes

### Theme-Aware
- `.bg-card`, `.bg-content`, `.bg-subtle` - Backgrounds
- `.text-primary`, `.text-secondary` - Text colors
- `.border-default` - Borders
- `.shadow-themed` - Shadows

### Status/Demo
- `.status-success`, `.status-error`, `.status-info`
- `.log-container`, `.log-success`, `.log-error`

## 🔧 Tools

### Migration Script
```bash
npm run theme:migrate
```
Automatically converts hardcoded colors to CSS variables.

### Dev Server
```bash
npm start
```
Hot reload for all styling changes.

## ✅ Best Practices

### ✅ DO
```html
<!-- Layout with Tailwind -->
<div class="flex items-center gap-4 p-6">
  <!-- Theme-aware surface -->
  <div class="bg-card rounded-lg shadow-themed">
    <!-- Theme-aware text -->
    <h3 class="text-primary">Title</h3>
    <!-- Material component -->
    <button mat-raised-button color="primary">Action</button>
  </div>
</div>
```

### ❌ DON'T
```html
<!-- Hardcoded colors -->
<div style="background: white; color: black;">

<!-- Custom CSS for layout -->
<div class="my-custom-flex-container">

<!-- Styled Material components -->
<button mat-button style="background: blue;">
```

## 🌗 Dark Mode

All custom styles automatically respect light/dark mode via CSS variables. No `dark:` classes needed!

```typescript
// Component styles
@Component({
  styles: [`
    .my-element {
      background-color: var(--bg-primary);  // Auto light/dark
      color: var(--text-primary);
    }
  `]
})
```

## 📞 Support

- Check documentation above
- See examples in existing components
- Review [THEMING-GUIDE.md](./THEMING-GUIDE.md) for theme details

---

**Last Updated:** 2024  
**Architecture Version:** 2.0 (Hybrid Tailwind + Material + Custom)

