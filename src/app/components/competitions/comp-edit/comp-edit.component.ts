import { Component, OnInit } from '@angular/core';
import { Competition } from '../../../extra/competition';
import { ServisService } from '../../../services/servis.service';
import { Drzava } from '../../../extra/drzava';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comp-edit',
  templateUrl: './comp-edit.component.html',
  styleUrls: ['./comp-edit.component.css'],
})
export class CompEditComponent implements OnInit {
  competition?: Competition;
  drzava?: Drzava;
  constructor(
    private servis: ServisService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getCompetition();
  }

  getCompetition(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servis.getCompetition(id).subscribe((x) => (this.competition = x));
  }
}
