import { Component } from '@angular/core';
import { DRZAVE } from './mock';
import {ServisService} from "./services/servis.service";
import {Drzava} from "./drzava";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  drzave:Drzava[] = [];
  title = 'Praksav192';
  constructor(private servisServis:ServisService) {
  }
  ngOnInit(): void {
    this.getDrzave();
  }
  getDrzave() {
    this.servisServis.getDrzave().subscribe(x=>this.drzave=x);
  }
}
