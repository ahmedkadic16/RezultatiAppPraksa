import { Component, OnInit } from '@angular/core';
import {Sport} from "../../../extra/sport";
import {ActivatedRoute} from "@angular/router";
import {ServisService} from "../../../services/servis.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-sport-edit',
  templateUrl: './sport-edit.component.html',
  styleUrls: ['./sport-edit.component.css']
})
export class SportEditComponent implements OnInit {
  sport?:Sport;
  constructor(
    private route: ActivatedRoute,
    private servisServis: ServisService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSport();
  }
  getSport():void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.servisServis.getSport(id).subscribe(x=>this.sport=x);
  }
  updateSport(sport:Sport) {
    console.log(this.sport?.sportsId+" " +this.sport?.name+ " UPDATED");
    this.servisServis.updateSport(sport).subscribe(()=>this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
