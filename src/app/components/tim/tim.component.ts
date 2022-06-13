import { Component, Input, OnInit } from '@angular/core';
import { Tim } from '../../tim';
import { ServisService } from '../../services/servis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TIMOVI } from '../../mock';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css'],
})
export class TimComponent implements OnInit {
  @Input() lista: Tim[] = [];
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
    this.timovi = TIMOVI;
   // this.servisServis.getTimovi().subscribe((x) => (this.timovi = x));
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

  search() {
    if(this.teamName!='') {
      let temp = this.teamName.toLowerCase();
      this.timovi=this.timovi.filter(x=> {return x.teamName.toLowerCase().match(temp)});
    }
    else {
      this.ngOnInit();
    }
  }
}
