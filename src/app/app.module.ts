import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DrzavaComponent } from './components/drzava/drzava.component';
import { DrzavaEditComponent } from './components/drzava/drzava-edit/drzava-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TimComponent } from './components/tim/tim.component';
import { TimEditComponent } from './components/tim/tim-edit/tim-edit.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import { SportComponent } from './components/sport/sport.component';
import { SportEditComponent } from './components/sport/sport-edit/sport-edit.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';

import {FilterSport} from "./filteri/filter-sport.pipe";
import {FilterDrzava} from "./filteri/filter-drzava.pipe";
import {FilterTeam} from "./filteri/filter-team.pipe";
import {FilterComp} from "./filteri/filter-comp.pipe";


@NgModule({
  declarations: [
    AppComponent,
    DrzavaComponent,
    DrzavaEditComponent,
    TimComponent,
    TimEditComponent,
    MainviewComponent,
    FilterDrzava,
    FilterTeam,
    FilterSport,
    FilterComp,
    SportComponent,
    SportEditComponent,
    CompetitionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
