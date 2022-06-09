import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DrzavaComponent } from './components/drzava/drzava.component';
import { DrzavaEditComponent } from './components/drzava-edit/drzava-edit.component';
import { AppRoutingModule } from './app-routing.module';

import { TimComponent } from './components/tim/tim.component';
import { TimEditComponent } from './components/tim-edit/tim-edit.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainviewComponent } from './components/mainview/mainview.component';

@NgModule({
  declarations: [
    AppComponent,
    DrzavaComponent,
    DrzavaEditComponent,
    TimComponent,
    TimEditComponent,
    SidebarComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
