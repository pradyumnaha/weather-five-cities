import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectAccessGuard } from '../shared/services/direct-access-guard.service';
import { CityService } from '../shared/services/city.service';
import { City } from '../shared/models/city.model';
import { WeatherService } from '../shared/services/weather.service';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: City[];
  apiCallFailed: boolean = false; 

  constructor(private router: Router, private accessGuard: DirectAccessGuard, private cityService: CityService, private weatherService: WeatherService, private dataService: DataService) { }

  ngOnInit() {
    this.cities = this.cityService.getCities().slice();
    this.cities.forEach(element => {
      //Service call will be made only once.
      if(!element.hasOwnProperty('cityWeather')){
        this.weatherService.getWeatherDetails(element.cityName, element.countryCd).subscribe(
        response => {
          element['cityWeather'] = response;
        },
        //If API call to service fails, an alert is displayed in the home screen.
        error => {
          this.apiCallFailed = true;
        });
      }
    });
    this.dataService.sendHomeBtnDisplayInfo(false);
}

  onClickCity(cityIndex) {
    //Allows navigation to weather-details screen only if city is clicked in the home screen.
    //Direct URL modification to weather-details screen is not allowed.
    
    this.dataService.sendCityWeatherInfo(this.cities, cityIndex);
    this.accessGuard.setAllowRouteChange(true);
    this.router.navigate(['/weather-details']);
  }

}
