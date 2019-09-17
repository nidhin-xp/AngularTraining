import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector:'.app-servers',
  template: '<app-server></app-server><app-server></app-server><app-server></app-server><h4>You jelly?</h4>',
  styleUrls: []
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
