import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// import { Greeter } from './app/features/angular/pages/testdome';
// import { DecimalComponent } from './app/features/angular/pages/testdome2';
// import { AppComponent } from './app/features/angular/pages/testdome4';

bootstrapApplication(App, appConfig)
// bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
