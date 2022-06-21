import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DrzavaComponent } from './components/drzava/drzava.component';
import { DrzavaEditComponent } from './components/drzava/drzava-edit/drzava-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule} from "@angular/material/expansion";

import { TimComponent } from './components/tim/tim.component';
import { TimEditComponent } from './components/tim/tim-edit/tim-edit.component';

import { SportComponent } from './components/sport/sport.component';
import { SportEditComponent } from './components/sport/sport-edit/sport-edit.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';

import {FilterSport} from "./filteri/filter-sport.pipe";
import {FilterDrzava} from "./filteri/filter-drzava.pipe";
import {FilterTeam} from "./filteri/filter-team.pipe";
import {FilterComp} from "./filteri/filter-comp.pipe";
import { FilterTimovi } from "./filteri/filter-timovi.pipe";
import { CompEditComponent } from './components/competitions/comp-edit/comp-edit.component';
import { CompDetailsComponent } from './components/competitions/comp-details/comp-details.component';
import { EventsComponent } from './components/events/events.component';
import { TestComponent } from './components/test/test.component';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    DrzavaComponent,
    DrzavaEditComponent,
    TimComponent,
    TimEditComponent,
    FilterDrzava,
    FilterTeam,
    FilterSport,
    FilterComp,
    FilterTimovi,
    SportComponent,
    SportEditComponent,
    CompetitionsComponent,
    CompEditComponent,
    CompDetailsComponent,
    EventsComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
