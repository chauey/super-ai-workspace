import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Greeter } from './app/angular/testdome';
import { DecimalComponent } from './app/angular/testdome2';
import { AppComponent } from './app/angular/testdome4';

bootstrapApplication(App, appConfig)
// bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
