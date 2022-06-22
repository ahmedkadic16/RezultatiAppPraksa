import { Component, OnInit } from '@angular/core';
import {Competition} from "../../extra/competition";
import {ServisService} from "../../services/servis.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Drzava } from "../../extra/drzava";
import { Sport } from "../../extra/sport";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions:Competition[] = [];
  drzave:Drzava[] = [];
  sportovi:Sport[] = [];
  selectedCompetition:any;
  naziv:string='';
  sportid:any;
  countryid:any;

  constructor(
    public servisServis: ServisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCompetitions();
    this.getDrzave();
  }

  getCompetitions() {
    this.servisServis.getCompetitions().subscribe(x=>this.competitions=x);
  }
  getDrzave() {
    this.servisServis.getDrzave().subscribe(x=>this.drzave=x);
    this.servisServis.getSportovi().subscribe(x=>this.sportovi=x);
  }
  dodajNoviComp() {
    this.selectedCompetition = {
      naziv:'',
      sportid:this.sportid,
      countryid:this.countryid,
    }
  }
  insertCompetition() {
    this.servisServis.insertCompetition(this.selectedCompetition).
    subscribe(x=>this.selectedCompetition=x);
    console.log('Competition added succesfully');
    alert(this.selectedCompetition.naziv + " " + this.selectedCompetition.sportid + " " + this.selectedCompetition.countryid);
    this.reloadCurrentRoute();
  }

  deleteCompetitionById(id: number) {
    this.competitions = this.competitions.filter(x=> x.id !== id);
    console.log('ID - ' + id);
    this.servisServis.deleteCompetitionById(id).subscribe();
    this.reloadCurrentRoute();
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
