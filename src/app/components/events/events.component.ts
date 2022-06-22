import { Component, OnInit } from '@angular/core';
import { ServisService } from '../../services/servis.service';
import { Competition } from "../../extra/competition";
import { ActivatedRoute, Router } from "@angular/router";
import { Event } from "../../extra/event";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  competitions: Competition[] = [];
  events:Event[] = [];
  panelOpenState = false;
  naziv:any;
  constructor(private servisService: ServisService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.getComp();
    this.getEvents();
  }
  getComp() {
    this.servisService.getCompetitions().subscribe((x) => (this.competitions = x));
  }
  getEvents() {
    this.servisService.getEvents().subscribe(x=>this.events=x);
  }

}

