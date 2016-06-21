import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {environment} from '../../environment';

@Component({
  selector: 'app-home',
  directives: [
    ROUTER_DIRECTIVES
  ],
  pipes: [],
  template: require('./home.component.html')
})

export class HomeComponent {

  constructor() {}

  ngOnInit() {
    console.log('hello `Home` component');
    console.log(environment);
  }

}
