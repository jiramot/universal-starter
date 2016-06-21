import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {HomeComponent} from './route/+home';
import { PlaylistComponent } from './route/+playlist';
import { MusicPlaylistComponent } from './route/+music';

@Component({
  selector: 'app',
  directives: [
    ROUTER_DIRECTIVES
  ],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})

@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true}
  , {path: '/playlist', name: 'Playlist', component: PlaylistComponent}
  , {path: '/playlist/:pid', name: 'MusicPlaylist', component: MusicPlaylistComponent}
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
