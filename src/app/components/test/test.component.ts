import { Component, OnInit } from "@angular/core";
import {Sort} from '@angular/material/sort';
import { Drzava } from "../../extra/drzava";
import { ServisService } from "../../services/servis.service";
import { Competition } from "../../extra/competition";
import { Sport } from "../../extra/sport";
import { Event } from "../../extra/event";


import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '50%',
        height:'100px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '50%',
        height:'50px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
})
export class TestComponent implements OnInit{
  isDisabled = false;
  isOpen = false;
  competitions:Competition[] = [];
  events:Event[]=[];
  panelOpenState = false;
  naziv:any;
  constructor(private servisService:ServisService) {
  }
  ngOnInit() {
    this.ucitaj();
  }

  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
  ucitaj() {
    this.servisService.getCompetitions().subscribe((x) => (this.competitions = x));
    this.servisService.getEvents().subscribe(x=>this.events=x);
  }
}
