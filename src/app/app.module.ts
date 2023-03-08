// App Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { QRCodeModule } from 'angularx-qrcode';
// App Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Others
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {LoaderService} from "./services/loader.service";
import { TokenInterceptor } from "./shared/interceptors/token.interceptor";
import {DashboardModule} from "./components/dashboard/dashboard.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    QRCodeModule,
    RouterModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderService,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  exports: [
    // InputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
