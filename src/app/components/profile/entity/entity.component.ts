import { Component, OnInit } from '@angular/core';

import { EntityService } from '../../../services/entity.service';

import { EntityEvent } from '../../../models/event';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  eventList: EntityEvent[];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.eventList = this.entityService.events;
  }

}
