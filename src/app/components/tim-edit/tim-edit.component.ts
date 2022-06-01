import { Component, OnInit } from '@angular/core';
import { Tim } from '../../tim'
import { ActivatedRoute } from '@angular/router';
import {ServisService} from "../../services/servis.service";

@Component({
  selector: 'app-tim-edit',
  templateUrl: './tim-edit.component.html',
  styleUrls: ['./tim-edit.component.css']
})
export class TimEditComponent implements OnInit {
  tim?:Tim;

  constructor(
    private route: ActivatedRoute,
    private servis: ServisService,

  ) { }

  ngOnInit(): void {
    this.getTim();
  }
  getTim():void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.servis.getTim(id).subscribe(x=>this.tim = x);
  }

}
