import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drzava } from '../../drzava';
import { ServisService } from '../../services/servis.service';
import { Tim } from '../../tim';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css'],
})
export class MainviewComponent implements OnInit {
  id: number = 0;
  lista: any;
  constructor(private route: ActivatedRoute, private servis: ServisService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      //console.log(params);
      //console.log(+params['id']);
      this.id = params['id'];
    });
    console.log(this.id);
    this.getTimovi(this.id);
  }
  getTimovi(id: number) {
    this.servis.getTeamByCountryId(id).subscribe((x) => (this.lista = x));
  }
}
