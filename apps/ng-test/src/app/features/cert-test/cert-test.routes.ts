import { Route } from '@angular/router';
import { TestListComponent } from './test-list.component';
import { CertTestComponent } from './cert-test.component';

export const certTestRoutes: Route[] = [
  {
    path: '',
    component: TestListComponent,  // Home page - browse tests
  },
  {
    path: ':testId/take',
    component: CertTestComponent,  // Take the test
  },
];

