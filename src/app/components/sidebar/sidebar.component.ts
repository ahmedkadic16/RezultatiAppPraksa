import { Component, OnInit } from '@angular/core';
import {DRZAVE } from "../../mock";
import {Drzava} from "../../drzava";
import { ServisService} from "../../services/servis.service";
import {filter, Observable} from "rxjs";
import {Tim} from "../../tim";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  drzave:Drzava[] = [];
  timovi:Tim[] = [];
  constructor(private servisServis:ServisService) { }

  ngOnInit(): void {
    this.getDrzave();
  }
  ucitajTimoviPoDrzavi(drzava:Drzava) {
    this.servisServis.getTimovi().subscribe(x=>this.timovi=x);
    this.timovi.filter(t=>t.countryId===drzava.countryId);
  }
  getDrzave() {
    this.servisServis.getDrzave().subscribe(x=>this.drzave=x)
  }
}
