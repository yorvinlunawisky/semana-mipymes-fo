import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardRoutingModule} from "./components/dashboard/dashboard-routing.module";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
