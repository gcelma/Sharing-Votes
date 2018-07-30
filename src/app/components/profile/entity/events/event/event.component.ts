import { Component, OnInit, Input } from '@angular/core';
import { EntityEvent } from '../../../../../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: EntityEvent;

  showcreatePoll: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  createPoll(){
    this.showcreatePoll = !this.showcreatePoll;
  }


}