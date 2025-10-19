import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  // Update the template here
  template: '<h1>Hello {{ name }}</h1>'
})

export class Greeter {
  @Input() name!: string;

  ngOnInit() {
    console.log('name is ' + this.name);
  }
}
