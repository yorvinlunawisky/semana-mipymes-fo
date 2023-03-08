// App Modules
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

// App Components
import {DashboardComponent} from "./dashboard.component";
import { ConferencesComponent } from './conferences/conferences.component';
import { SpeakersComponent } from './speakers/speakers.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../shared/components/input/input.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ConferencesComponent,
    SpeakersComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
  ]
})
export class DashboardModule { }
