// Instructions to set up local environment for Angular project
// Create a new Angular project
// Replace the contents of app.component.ts with the following starting template:
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'summary',
  standalone: true,
  template: '<p>Total count: {{ countString }}</p>',
  styles: [],
})
export class Summary implements OnInit {
  @Input() count: number | undefined;
  countString: string | undefined;

  constructor() {}

  ngOnInit() {
    this.countString = `${this.count}`;
    console.log('countString is ' + this.countString);
  }
}
// When copying to the TestDome environment, don't copy anything after this comment

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Summary],
  template: `<summary [count]="1"></summary>`,
})
export class AppComponent {}
