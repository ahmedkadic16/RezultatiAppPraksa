import { Component } from '@angular/core';
import { DRZAVE } from './extra/mock';
import {ServisService} from "./services/servis.service";
import {Drzava} from "./extra/drzava";
import {Competition} from "./extra/competition";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  drzave:Drzava[] = [];
  title = 'Praksav192';
  comp:Competition[] = [];
  todayDate : Date = new Date();
  panelOpenState=false;

  constructor(private servisService:ServisService) {
  }
  ngOnInit(): void {
    this.getDrzave();
  }
  getDrzave() {
      this.servisService.getDrzave().subscribe((x) => (this.drzave = x));
      this.servisService.getCompetitions().subscribe(x=>this.comp=x);}
}
