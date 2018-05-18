import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.template.html`,
  // template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Miguel'; }