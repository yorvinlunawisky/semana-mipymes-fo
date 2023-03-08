import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ConferencesComponent} from "./conferences/conferences.component";
import {SpeakersComponent} from "./speakers/speakers.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {
      path: 'conferencias',
      component: ConferencesComponent,
      },
      {
        path: 'conferencistas',
        component: SpeakersComponent,
      }
      ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
