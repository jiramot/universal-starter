import { Component, Directive } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, OnActivate, ComponentInstruction } from '@angular/router-deprecated';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'music-playlist',
  directives: [ROUTER_DIRECTIVES],
  template: require('./music.playlist.component.html')
})
export class MusicPlaylistComponent implements OnActivate {

  description: string;

  constructor(private http: Http) {
    console.log("constructor");
  }

  routerOnActivate(nextInstruction: ComponentInstruction
    , prevInstruction: ComponentInstruction) {
    console.log("routerOnActivate");
    console.log(nextInstruction);
    console.log("params");
    console.log(nextInstruction.params.pid);
    var url: string = "xxx/"+nextInstruction.params.pid;
    console.log(url);
    this.http.get(url)
      .map(res => res.json())
      .subscribe(res => {
        this.description = res.description;
      });
  }

}
