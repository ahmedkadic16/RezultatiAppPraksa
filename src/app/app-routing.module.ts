import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrzavaComponent } from './components/drzava/drzava.component';
import { DrzavaEditComponent } from './components/drzava/drzava-edit/drzava-edit.component';
import { TimComponent } from './components/tim/tim.component';
import { TimEditComponent } from './components/tim/tim-edit/tim-edit.component';
import { SportComponent} from "./components/sport/sport.component";
import { CompetitionsComponent} from "./components/competitions/competitions.component";
import { SportEditComponent } from "./components/sport/sport-edit/sport-edit.component";
import { CompEditComponent } from "./components/competitions/comp-edit/comp-edit.component";
import { PreloadAllModules } from '@angular/router';
import { CompDetailsComponent } from "./components/competitions/comp-details/comp-details.component";
import { EventsComponent } from "./components/events/events.component"
import { TestComponent } from "./components/test/test.component";
import { EventDetailsComponent } from "./components/events/event-details/event-details.component";
import { EventAddComponent } from "./components/events/event-add/event-add.component";

const routes: Routes = [
  { path: 'drzava', component: DrzavaComponent },
  { path: 'detail/:id', component: DrzavaEditComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'comp-edit/:id', component: CompEditComponent },
  { path: 'comp-details/:id', component: CompDetailsComponent },
  { path: 'sport', component: SportComponent },
  { path: 'sport/:id', component: SportEditComponent },
  { path: 'timDetail/:id', component: TimEditComponent },
  { path: 'timovi', component: TimComponent },
  { path: 'events', component: EventsComponent},
  { path: 'event-add', component: EventAddComponent},
  { path: 'event-detail/:id', component: EventDetailsComponent },
  { path: 'test', component: TestComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.default)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
