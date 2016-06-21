import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {HomeComponent} from './route/+home';

@Component({
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES
  ],
  template:
  `
  <div class="container-fluid">
    <nav>
      <a [routerLink]="['/']">Index</a>
      <a [routerLink]="['/home']">Home</a>
    </nav>
  </div>
  <div class="container-fluid">
    <router-outlet></router-outlet>
  </div>
    `
})

@Routes([
  { path: '/',      component: HomeComponent },
  { path: '/home',  component: HomeComponent }
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
