import { Component, OnInit,Input } from '@angular/core';
import { Drzava } from '../../drzava'
import { ActivatedRoute } from '@angular/router';
import {ServisService} from "../../services/servis.service";

@Component({
  selector: 'app-drzava-edit',
  templateUrl: './drzava-edit.component.html',
  styleUrls: ['./drzava-edit.component.css']
})
export class DrzavaEditComponent implements OnInit {
  drzava?:Drzava;

  constructor(
    private route: ActivatedRoute,
    private servis: ServisService,

  ) { }

  ngOnInit(): void {
      this.getDrzavu();
  }
  getDrzavu():void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.servis.getDrzavu(id).subscribe(x=>this.drzava = x);
  }


}
