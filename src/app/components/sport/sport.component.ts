import { Component, OnInit } from '@angular/core';
import {Sport} from "../../extra/sport";
import {ServisService} from "../../services/servis.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  sportovi:Sport[] = [];
  selectedSport:any;
  name='';
  constructor(
    private servisServis:ServisService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getSportovi();
  }

  getSportovi() {
    this.servisServis.getSportovi().subscribe(x=>this.sportovi=x);
  }
  deleteSportById(id:number) {
    this.servisServis.deleteSportById(id).subscribe();
    this.reloadCurrentRoute();
  }


  dodajNoviSport() {
    this.selectedSport = {
      name:'',
    };
  }
  insertSport(sport:Sport) {
    this.servisServis.insertSport(sport).subscribe(x=>this.selectedSport=x);
    console.log("Sport added succesfully");
    this.reloadCurrentRoute();
  }



  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
