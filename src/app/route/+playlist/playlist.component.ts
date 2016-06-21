import { Component, Directive } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Playlist } from './playlist.model';

@Component({
  selector: 'playlist',
  directives: [ROUTER_DIRECTIVES],
  template: require('./playlist.component.html')
})
export class PlaylistComponent {

  playlist: Array<Playlist> = [];

  constructor(private http: Http) {}

  ngOnInit() {
    console.log("PlaylistComponent");
    this.http.get("xxx")
      .map(res => res.json())
      .subscribe((res: Array<Playlist>) => {
        console.log(res.length);
        if (res) {
          this.populate(res);
        }
      });
  }

  private populate(items: any) {
    items.forEach(item => {
      this.playlist.push(new Playlist(item.id, item.name));
    });
    console.log(this.playlist);
  }

}
