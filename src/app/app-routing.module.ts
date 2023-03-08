import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UserRegisterComponent} from "./components/users/user-register/user-register.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'registrar-usuario', component: UserRegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
