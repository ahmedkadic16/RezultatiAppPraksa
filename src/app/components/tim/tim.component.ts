import { Component, OnInit } from '@angular/core';
import {Tim} from "../../tim";
import {ServisService} from "../../services/servis.service";

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit {
  timovi:Tim[] = [];
  selectedTim:any;
  constructor(public servisServis:ServisService) { }

  ngOnInit(): void {
    this.getTimovi();
  }
  getTimovi():void {
    this.servisServis.getTimovi().subscribe(x=>this.timovi=x);
  }

  dodajNoviTim() {
    this.selectedTim = {
      teamId:0,
      teamName:"",
      foundedYear:null,
      city:"",
      countryId:null,
    }
  }
}
