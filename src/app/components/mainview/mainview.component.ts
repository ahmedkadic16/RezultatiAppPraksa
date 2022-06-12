import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ServisService } from '../../services/servis.service';
import { Location} from "@angular/common";

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css'],
})
export class MainviewComponent implements OnInit {
  lista?:any;

  constructor(
    private location:Location,
    private activeRoute: ActivatedRoute,
    private servis: ServisService,
    private router: Router) {
  }

  ngOnInit() {
    this.getTimovi();
  }

  getTimovi() {
    this.activeRoute.params.subscribe(params => {
      this.servis.getTeamByCountryId(params['id']).subscribe((x) => (this.lista = x));
    });
  }
}
