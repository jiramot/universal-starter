import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';


@Component({
  selector: 'app-home',
  directives: [
    ROUTER_DIRECTIVES
  ],
  pipes: [],
  template: `
    <p>
      This is home of fungjai 2.0 !!!!
    </p>  
  `
})

export class HomeComponent {

  constructor() {}

  ngOnInit() {
    console.log('hello `Home` component');
  }

}
