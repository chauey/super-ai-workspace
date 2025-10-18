#!/usr/bin/env node
/**
 * Enterprise Angular Theme Migration Script
 *
 * Converts hardcoded colors to CSS custom properties following Angular best practices.
 * This ensures all components respect the application theme (light/dark mode).
 *
 * @author AI Assistant
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// Color mapping configuration
const COLOR_MAPPINGS = {
  // Backgrounds
  backgrounds: [
    { pattern: /background:\s*white/gi, replacement: 'background-color: var(--bg-primary)' },
    { pattern: /background:\s*#fff(?![0-9a-f])/gi, replacement: 'background-color: var(--bg-primary)' },
    { pattern: /background:\s*#f8f9fa/gi, replacement: 'background-color: var(--bg-tertiary)' },
    { pattern: /background:\s*#fff3cd/gi, replacement: 'background-color: rgba(255, 193, 7, 0.15)' },
  ],

  // Text colors
  textColors: [
    { pattern: /color:\s*#333/gi, replacement: 'color: var(--text-primary)' },
    { pattern: /color:\s*#666/gi, replacement: 'color: var(--text-secondary)' },
  ],

  // Borders
  borders: [
    { pattern: /border:\s*1px\s+solid\s+#ddd/gi, replacement: 'border: 1px solid var(--border-color)' },
    { pattern: /border-color:\s*#ddd/gi, replacement: 'border-color: var(--border-color)' },
  ],
};

/**
 * Applies theme variable replacements to a file
 * @param {string} filePath - Path to the component file
 * @returns {boolean} - True if file was modified
 */
function applyThemeVariables(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let changeCount = 0;

  // Apply all mappings
  Object.entries(COLOR_MAPPINGS).forEach(([category, mappings]) => {
    mappings.forEach(({ pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        changeCount += matches.length;
      }
    });
  });

  if (content !== originalContent) {
    // Add theme-aware comment if not present
    if (!content.includes('Theme-aware styles') && content.includes('styles: [`')) {
      content = content.replace(
        'styles: [`',
        `styles: [\`
    /* Theme-aware styles using CSS custom properties */
    /* Best Practice: Use CSS variables for all theme colors */
    `
      );
    }

    fs.writeFileSync(filePath, content, 'utf8');
    return { modified: true, changes: changeCount };
  }

  return { modified: false, changes: 0 };
}

/**
 * Recursively find and process Angular component files
 * @param {string} dir - Directory to search
 * @param {Array} stats - Statistics array
 */
function processDirectory(dir, stats = { fixed: 0, skipped: 0, changes: 0 }) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules, dist, and hidden directories
      if (!entry.name.startsWith('.') &&
          entry.name !== 'node_modules' &&
          entry.name !== 'dist') {
        processDirectory(fullPath, stats);
      }
    } else if (entry.name.endsWith('.component.ts')) {
      const result = applyThemeVariables(fullPath);

      if (result.modified) {
        console.log(`✅ ${path.relative(process.cwd(), fullPath)} (${result.changes} changes)`);
        stats.fixed++;
        stats.changes += result.changes;
      } else {
        stats.skipped++;
      }
    }
  }

  return stats;
}

/**
 * Main execution function
 */
function main() {
  console.log('🎨 Angular Theme Variable Migration\n');
  console.log('Converting hardcoded colors to CSS custom properties...\n');

  const srcDir = path.join(__dirname, '..', 'src', 'app', 'angular');

  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Error: Source directory not found: ${srcDir}`);
    process.exit(1);
  }

  const stats = processDirectory(srcDir);

  console.log('\n' + '='.repeat(60));
  console.log(`✨ Migration Complete!`);
  console.log(`   - Components updated: ${stats.fixed}`);
  console.log(`   - Components skipped: ${stats.skipped}`);
  console.log(`   - Total changes: ${stats.changes}`);
  console.log('='.repeat(60));

  if (stats.fixed > 0) {
    console.log('\n💡 The dev server should auto-reload.');
    console.log('   If changes don\'t appear, restart with: npm start\n');
  }
}

// Run the script
main();

