import { Component, OnInit } from '@angular/core';
import {Competition} from "../../extra/competition";
import {ServisService} from "../../services/servis.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions:Competition[] = [];
  selectedCompetition:any;
  naziv:string='';

  constructor(
    public servisServis: ServisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCompetitions();
  }

  getCompetitions() {
    this.servisServis.getCompetitions().subscribe(x=>this.competitions=x);
  }

  dodajNoviComp() {
    this.selectedCompetition = {
      naziv:'',
      sportid:null,
      countryid:null,
    }
  }
  insertCompetition() {
    this.servisServis.insertCompetition(this.selectedCompetition).
    subscribe(x=>this.selectedCompetition=x);
    console.log('Competition added succesfully');
    alert('Competition je uspjesno dodat');
    this.reloadCurrentRoute();
  }

  deleteCompetitionById(id:number) {
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
