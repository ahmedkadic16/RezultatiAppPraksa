import { Component, OnInit } from '@angular/core';
import { ServisService } from '../../services/servis.service';
import { Competition } from "../../extra/competition";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  competitions: Competition[] = [];
  panelOpenState = false;
  naziv:any;
  constructor(private servisService: ServisService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.getComp();
  }
  getComp() {
    this.servisService.getCompetitions().subscribe((x) => (this.competitions = x));
  }
}

