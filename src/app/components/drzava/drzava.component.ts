import { Component, OnInit } from '@angular/core';
import {DRZAVE} from '../../mock'
import { Drzava}  from '../../drzava'
import { ServisService} from "../../services/servis.service";

@Component({
  selector: 'app-drzava',
  templateUrl: './drzava.component.html',
  styleUrls: ['./drzava.component.css']
})
export class DrzavaComponent implements OnInit {
  drzave:Drzava[] = [];
  id:any;
  selectedDrzava?:Drzava;
  constructor(public servisService:ServisService) { }

  ngOnInit(): void {
    this.getDrzave();
  }
  onSelect(drzava: Drzava) {
    this.selectedDrzava = drzava;
  }
  getDrzave() {
    this.servisService.getDrzave().subscribe(x=>this.drzave=x)
  }

  deleteDrzavaById(id:number) {
    this.servisService.deleteDrzavaById(id).subscribe(x=> {console.log('x')}  );
  }

  dodajNovuDrzavu() {
    this.selectedDrzava={
      countryId:1,
      countryName:""
    }

  }

  insertCountry(drzava:Drzava) {
    this.servisService.insertDrzava(drzava).subscribe(x=>this.selectedDrzava=x);
    console.log("iz drzave component gotovo");
    this.getDrzave();
  }
}
