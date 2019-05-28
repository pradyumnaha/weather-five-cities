import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { HeaderComponent } from './header/header.component';
import { WeatherService } from './shared/services/weather.service';
import { CityService } from './shared/services/city.service';
import { HttpClientModule } from '@angular/common/http';
import { KelvinToCelciusPipe } from './shared/pipes/kelvin-to-celcius.pipe';
import { MtrPersecToKmPerhrPipe } from './shared/pipes/mtr-persec-to-km-perhr.pipe';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherdetailsComponent,
    HeaderComponent,
    KelvinToCelciusPipe,
    MtrPersecToKmPerhrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService,CityService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
