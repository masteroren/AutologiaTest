import { ResultsComponent } from './cars/results/results.component';
import { CommertialCarComponent } from './cars/commertial-car/commertial-car.component';
import { SuvCarComponent } from './cars/suv-car/suv-car.component';
import { PrivateCarComponent } from './cars/private-car/private-car.component';
import { WelcomComponent } from './cars/welcom.component';
import { appRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    PrivateCarComponent,
    CommertialCarComponent,
    SuvCarComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
