import { Component, OnInit } from '@angular/core';
import { Server } from '../models/server';

const SAMPLE_SERVERS = [
  { id: 1, name: 'todoist-app', isOnline: true},
  { id: 2, name: 'google-calendar', isOnline: true},
  { id: 3, name: 'google-mail', isOnline: false},
  { id: 4, name: 'medium', isOnline: true},
];

@Component({
  selector: 'app-system-widgets',
  templateUrl: './system-widgets.component.html',
  styleUrls: ['./system-widgets.component.css']
})
export class SystemWidgetsComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
