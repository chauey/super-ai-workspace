// import { inject, Injectable, isDevMode } from '@angular/core';
// import { Translation, TRANSLOCO_LOADER, TranslocoLoader, TRANSLOCO_CONFIG, translocoConfig, TranslocoModule, TRANSLOCO_TRANSPILER, DefaultTranspiler, TRANSLOCO_MISSING_HANDLER, DefaultHandler } from '@jsverse/transloco';
// import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
// export class TranslocoHttpLoader implements TranslocoLoader {
//   private http = inject(HttpClient);

//   getTranslation(lang: string) {
//     return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
//   }
// }

// export const translocoConfiguration = translocoConfig({
//   availableLangs: ['en', 'es', 'fr', 'de'],
//   defaultLang: 'en',
//   fallbackLang: 'en',
//   // Remove this option if your application doesn't support changing language in runtime.
//   reRenderOnLangChange: true,
//   prodMode: !isDevMode(),
// });

// export const translocoProviders = [
//   {
//     provide: TRANSLOCO_CONFIG,
//     useValue: translocoConfiguration
//   },
//   {
//     provide: TRANSLOCO_LOADER,
//     useClass: TranslocoHttpLoader
//   },
//   {
//     provide: TRANSLOCO_TRANSPILER,
//     useClass: DefaultTranspiler
//   },
//   {
//     provide: TRANSLOCO_MISSING_HANDLER,
//     useClass: DefaultHandler
//   }
// ];
