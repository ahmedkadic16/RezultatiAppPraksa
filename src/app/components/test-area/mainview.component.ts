import { Component, OnInit } from '@angular/core';
import { ServisService } from '../../services/servis.service';
import { Drzava } from '../../extra/drzava';
import { Competition } from "../../extra/competition";

@Component({
  selector: 'app-test-area',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css'],
})
export class MainviewComponent implements OnInit {
  competitions: Competition[] = [];
  panelOpenState = false;

  constructor(private servisService: ServisService) {}

  ngOnInit() {
    this.getComp();
  }
  getComp() {
    this.servisService.getCompetitions().subscribe((x) => (this.competitions = x));
  }

}

