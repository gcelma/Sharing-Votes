import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../../services/entity.service';
import { EntityEvent } from '../../../../models/event';

@Component({
  selector: 'entity-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventList: EntityEvent[];

  constructor(private entityService: EntityService) { }

  ngOnInit() {

    this.eventList = this.entityService.events;

  }

}
