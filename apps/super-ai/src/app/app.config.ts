import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { appRoutes } from './app.routes';
// import { provideTransloco } from '@jsverse/transloco';
// import { TranslocoHttpLoader } from './core/transloco/transloco.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule, LayoutModule),
    // provideTransloco({
    //   config: {
    //     availableLangs: ['en', 'es', 'fr', 'de'],
    //     defaultLang: 'en',
    //     fallbackLang: 'en',
    //     reRenderOnLangChange: true,
    //     prodMode: false,
    //   },
    //   loader: TranslocoHttpLoader
    // }),
  ],
};
