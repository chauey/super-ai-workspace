import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
// import { TranslocoService, TranslocoModule } from '@jsverse/transloco';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    // TranslocoModule
  ],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="languageMenu" class="language-selector">
      <mat-icon>language</mat-icon>
    </button>

    <mat-menu #languageMenu="matMenu" class="language-menu">
      <button
        mat-menu-item
        *ngFor="let language of languages"
        (click)="changeLanguage(language.code)"
        [class.active]="isCurrentLanguage(language.code)">
        <img class="flag-icon" [src]="'https://flagcdn.com/w20/' + language.flag.toLowerCase() + '.png'" [alt]="language.flag"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'">
        <span class="flag-fallback" style="display: none;">{{ getFlagEmoji(language.code) }}</span>
        <span>{{ language.name }}</span>
      </button>
    </mat-menu>
  `,
  styles: [`
    .language-selector {
      color: inherit;
    }

    .language-menu {
      .mat-mdc-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;

        .flag-icon {
          width: 20px;
          height: 15px;
          border-radius: 2px;
          object-fit: cover;
        }

        .flag-fallback {
          font-size: 16px;
          width: 20px;
        }

        &.active {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    }

    :host-context(.dark-theme) .language-menu .mat-mdc-menu-item.active {
      background-color: rgba(255, 255, 255, 0.04);
    }
  `]
})
export class LanguageSelectorComponent {
  private currentLang = signal('en');

  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'US' },
    { code: 'es', name: 'Spanish', flag: 'ES' },
    { code: 'fr', name: 'French', flag: 'FR' },
    { code: 'de', name: 'German', flag: 'DE' }
  ];

  changeLanguage(langCode: string): void {
    this.currentLang.set(langCode);
    console.log('Language changed to:', langCode);
  }

  isCurrentLanguage(langCode: string): boolean {
    return this.currentLang() === langCode;
  }

  getFlagEmoji(code: string): string {
    const flags: { [key: string]: string } = {
      'en': '🇺🇸',
      'es': '🇪🇸',
      'fr': '🇫🇷',
      'de': '🇩🇪'
    };
    return flags[code] || '🌐';
  }
}
