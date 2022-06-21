import { Component, OnInit } from "@angular/core";
import {Sort} from '@angular/material/sort';
import { Drzava } from "../../extra/drzava";
import { ServisService } from "../../services/servis.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  drzave:Drzava[]=[];
  sortedData:any;

  constructor(private servis:ServisService) {
    this.getDrzave();
  }
  ngOnInit() {
    this.sortedData = this.drzave;
  }

  getDrzave() {
    this.servis.getDrzave().subscribe(x=>this.drzave=x);
    this.servis.getDrzave().subscribe(x=>this.sortedData=x);
  }
  sortData(sort: Sort) {
    const data = this.drzave.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.countryName, b.countryName, isAsc);
        case 'id':
          return compare(a.countryId, b.countryId, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
