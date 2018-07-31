import { Component, OnInit, Input } from '@angular/core';
import { EntityEvent } from '../../../../../models/event';

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: EntityEvent;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  createPoll(id: string){  // Show INFO of the Book by Key
  this.router.navigate(['/profile/', id]);
  }

}
