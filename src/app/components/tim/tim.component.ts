import { Component, OnInit } from '@angular/core';
import {Tim} from "../../tim";
import {ServisService} from "../../services/servis.service";
import {ActivatedRoute, Router} from "@angular/router";
import { catchError, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit {
  timovi:Tim[] = [];
  selectedTim:any;
  constructor(public servisServis:ServisService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getTimovi();
  }
  getTimovi():void {
    this.servisServis.getTimovi().subscribe(x=>this.timovi=x);
  }
  dodajNoviTim() {
    this.selectedTim = {
      teamName:"",
      city:"",
      countryId:0,
      foundedYear:2021,
    }
  }
  insertTeam() {
    this.servisServis.insertTim(this.selectedTim).subscribe(x=> this.selectedTim=x);
    console.log("team addess succesfully");
    this.reloadCurrentRoute();
  }
  deleteTeam(id:number) {
    this.timovi.filter(x=> x.teamId !== id);
    this.servisServis.deleteTeamById(id).subscribe();
    this.reloadCurrentRoute();
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
