import { Component, OnInit } from '@angular/core';
import { Event} from '../../../extra/event'
@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  event:any;
  constructor() { }

  ngOnInit(): void {
    this.loadEvent();
  }
  loadEvent() {
    this.event = {
      eventId: 0,
        eventName:"",
        competitionId:0,
        eventStartTime:new Date(),
        eventStatus:"",
        eventPeriod: "",
      result:"",
      homeTeam:"",
      awayTeam:"",
      yellowCardsHomeTeam:0,
      yellowCardsAwayTeam: 0,
      redCardsHomeTeam: 0,
      redCardsAwayTeam: 0
    }
  }
}
