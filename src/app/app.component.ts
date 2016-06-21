import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {HomeComponent} from './route/+home';

@Component({
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES
  ],
  template: require('./app.component.html'),
  style: [require('./app.component.scss')]
})

@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true}
])

export class App {
  title:string = 'ftw';
  data = {};
  server:string;

  constructor(public http:Http) {
  }

  ngOnInit() {
    // limit the use of setTimeouts
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);
  }

}
