import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServisService } from "../../../services/servis.service";
import { Drzava } from "../../../extra/drzava";

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {
  comp:any;
  id:any;
  drzave:Drzava[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private servis: ServisService,
  ) { }

ngOnInit(): void {
  this.getComp();
  this.getDrzave();
}
getComp(): void {
  this.activeRoute.params.subscribe(routeParams => {
    this.servis.getCompetition(routeParams['id']).subscribe(x=>this.comp=x);
  });
}

   getDrzave() {
    this.servis.getDrzave().subscribe(x=>this.drzave=x);
  }

  getDataText(id:number) {
    let drzava = this.drzave.find(i => i.countryId === id);
    if (typeof drzava === 'undefined') {
      return null;
    }
    return drzava.countryName;
  }
}
