// Instructions to set up local environment for Angular project
// Create a new Angular project
// Replace the contents of app.component.ts with the following starting template:
import { Component } from '@angular/core';

@Component({
  selector: 'upgrades',
  standalone: true,
  template: `<div>
    <h1 (click)="onClick()">Latest upgrades</h1>
    @if (isVisible) {
    <div id="upgrade-list">
      <p>New buttons</p>
      <p>Even more new buttons</p>
    </div>
    }
  </div> `,
})
export class Upgrades {
  isVisible = false;

  onClick() {
    this.isVisible = !this.isVisible;
  }
}
// When copying to the TestDome environment, don't copy anything after this comment

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Upgrades],
  template: `<upgrades></upgrades>`,
})
export class AppComponent {}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'upgrades',
//   standalone: true,
//   template: `<div>
//   <h1>Latest upgrades</h1>
//   <div id="upgrade-list">
//     <p>New buttons</p>
//     <p>Even more new buttons</p>
//   </div>
// </div>
// `
// })
// export class Upgrades {
// }
