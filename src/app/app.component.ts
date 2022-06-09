import { Component } from '@angular/core';
import {DRZAVE} from "./mock";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drzave = DRZAVE;
  title = 'Praksav192';

}
