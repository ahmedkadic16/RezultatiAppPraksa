import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrzavaComponent } from './components/drzava/drzava.component';
import { DrzavaEditComponent } from './components/drzava/drzava-edit/drzava-edit.component';
import { TimComponent } from './components/tim/tim.component';
import { TimEditComponent } from './components/tim/tim-edit/tim-edit.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import {SportComponent} from "./components/sport/sport.component";
import {CompetitionsComponent} from "./components/competitions/competitions.component";

const routes: Routes = [
  { path: 'drzava', component: DrzavaComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'sport', component: SportComponent },
  { path: 'detail/:id', component: DrzavaEditComponent },
  { path: 'timDetail/:id', component: TimEditComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'timovi', component: TimComponent },
  { path: 'mainview/:id', component: MainviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
