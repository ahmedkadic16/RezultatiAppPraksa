import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrzavaComponent } from "./components/drzava/drzava.component";
import { DrzavaEditComponent } from "./components/drzava-edit/drzava-edit.component";
import {TimComponent} from "./components/tim/tim.component";
import {TimEditComponent} from "./components/tim-edit/tim-edit.component";

const routes: Routes = [
  { path: 'drzava', component: DrzavaComponent },
  { path:'detail/:id', component: DrzavaEditComponent},
  { path:'timDetail/:id', component: TimEditComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path:'timovi', component: TimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
