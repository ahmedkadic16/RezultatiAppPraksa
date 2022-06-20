import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrzavaComponent } from './components/drzava/drzava.component';
import { DrzavaEditComponent } from './components/drzava/drzava-edit/drzava-edit.component';
import { TimComponent } from './components/tim/tim.component';
import { TimEditComponent } from './components/tim/tim-edit/tim-edit.component';
import { MainviewComponent } from './components/test-area/mainview.component';
import {SportComponent} from "./components/sport/sport.component";
import {CompetitionsComponent} from "./components/competitions/competitions.component";
import { SportEditComponent } from "./components/sport/sport-edit/sport-edit.component";
import { CompEditComponent } from "./components/competitions/comp-edit/comp-edit.component";

const routes: Routes = [
  { path: 'drzava', component: DrzavaComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'comp-edit/:id', component: CompEditComponent },
  { path: 'sport', component: SportComponent },
  { path: 'detail/:id', component: DrzavaEditComponent },
  { path: 'sport/:id', component: SportEditComponent },
  { path: 'timDetail/:id', component: TimEditComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'timovi', component: TimComponent },
  { path: 'test-area', component: MainviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
