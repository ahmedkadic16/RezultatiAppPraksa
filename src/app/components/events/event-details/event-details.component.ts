import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServisService } from "../../../services/servis.service";
import { Event} from "../../../extra/event";
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event?:Event;
  constructor(private activeRoute: ActivatedRoute,
              private servis: ServisService,) { }

  ngOnInit(): void {
    this.getEvent();
  }
  getEvent(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.servis.getEventById(routeParams['id']).subscribe(x=>this.event=x);
    });
  }
}
