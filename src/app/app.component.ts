import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {HomeComponent} from './route/+home';

@Component({
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES
  ],
  template: `
    <span router-active>
      <button [routerLink]=" ['Index'] ">
        Index
      </button>
    </span>
    <span router-active>
      <button [routerLink]=" ['Home'] ">
        Home
      </button>
    </span>
    <main>
      <router-outlet></router-outlet>
    </main>
    `
})

@RouteConfig([
  { path: '/',      name: 'Index', component: HomeComponent, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: HomeComponent }
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
