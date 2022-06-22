import { Component, Input, OnInit } from '@angular/core';
import { Tim } from '../../extra/tim';
import { ServisService } from '../../services/servis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TIMOVI } from '../../extra/mock';
import { Drzava } from "../../extra/drzava";

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css'],
})
export class TimComponent implements OnInit {
  @Input() lista: Tim[] = [];
  drzave:Drzava[] = [];
  timovi:Tim[] = [];
  selectedTim: any;
  teamName='';
  constructor(
    public servisServis: ServisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTimovi();
  }
  getTimovi(): void {
   // this.timovi = TIMOVI;
   this.servisServis.getTimovi().subscribe((x) => (this.timovi = x));
   this.servisServis.getDrzave().subscribe(x=>this.drzave=x);
  }
  dodajNoviTim() {
    this.selectedTim = {
      teamName: '',
      city: '',
      countryId: null,
      foundedYear: null,
    };
  }
  insertTeam() {
    this.servisServis
      .insertTim(this.selectedTim)
      .subscribe((x) => (this.selectedTim = x));
    console.log('team addess succesfully');
    alert('Tim je uspjesno dodat');
    this.reloadCurrentRoute();
  }
  deleteTeam(id: number) {
    this.timovi.filter((x) => x.teamId !== id);
    this.servisServis.deleteTeamById(id).subscribe();
    this.reloadCurrentRoute();
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
