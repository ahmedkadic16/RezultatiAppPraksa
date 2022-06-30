import { Component, OnInit } from '@angular/core';
import { Event} from '../../../extra/event'
import { ServisService } from "../../../services/servis.service";
import { Competition } from "../../../extra/competition";
@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  event:any;
  constructor(private servisServis:ServisService) { }
  competitions:Competition[] = [];



  ngOnInit(): void {
    this.loadEvent();
    this.getComps();
  }
  loadEvent() {
    this.event = {
      eventId: null,
        eventName:"",
        competitionId:null,
        eventStartTime:new Date(),
        eventStatus:"",
        eventPeriod: "",
      result:"0-0",
      homeTeam:"",
      awayTeam:"",
      yellowCardsHomeTeam:0,
      yellowCardsAwayTeam: 0,
      redCardsHomeTeam: 0,
      redCardsAwayTeam: 0
    }
  }
  getComps() {
    this.servisServis.getCompetitions().subscribe(x=>this.competitions=x);
  }
}
