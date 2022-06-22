import { Component, OnInit } from "@angular/core";
import {Sort} from '@angular/material/sort';
import { Drzava } from "../../extra/drzava";
import { ServisService } from "../../services/servis.service";



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  constructor(private servis:ServisService) {

  }

  ngOnInit() {

  }

}
