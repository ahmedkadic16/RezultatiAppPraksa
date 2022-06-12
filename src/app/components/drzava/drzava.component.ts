import { Component, OnInit } from '@angular/core';
import { DRZAVE } from '../../mock';
import { Drzava } from '../../drzava';
import { ServisService } from '../../services/servis.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-drzava',
  templateUrl: './drzava.component.html',
  styleUrls: ['./drzava.component.css'],
})
export class DrzavaComponent implements OnInit {
  drzave:Drzava[] = [];
  //drzave = DRZAVE;
  id: any;
  selectedDrzava?: Drzava;
  constructor(
    public servisService: ServisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDrzave();
  }
  onSelect(drzava: Drzava) {
    this.selectedDrzava = drzava;
  }
  getDrzave() {
    this.servisService.getDrzave().subscribe((x) => (this.drzave = x));
  }
  deleteDrzavaById(id: number) {
    this.drzave = this.drzave.filter(x=> x.countryId !== id);
    console.log('ID - ' + id);
    this.servisService.deleteDrzavaById(id).subscribe();
    this.reloadCurrentRoute();
  }
  dodajNovuDrzavu() {
    this.selectedDrzava = {
      countryId: 1,
      countryName: '',
    };
  }
  insertCountry(drzava: Drzava) {
    let temp = drzava;
    this.servisService
      .insertDrzava(drzava)
      .subscribe((x) => (this.selectedDrzava = x));
    console.log('Drzava addess succesfully');
    alert('Drzava je uspjesno dodata');
    this.reloadCurrentRoute();
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
