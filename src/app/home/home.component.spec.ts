import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../shared/services/data.service';
import { HomeComponent } from './home.component';
import { DirectAccessGuard } from '../shared/services/direct-access-guard.service';
import { WeatherService } from '../shared/services/weather.service';
import { KelvinToCelciusPipe } from '../shared/pipes/kelvin-to-celcius.pipe';
import { MtrPersecToKmPerhrPipe } from '../shared/pipes/mtr-persec-to-km-perhr.pipe';
import { CityService } from '../shared/services/city.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component, fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule,HttpClientModule],
        declarations: [HomeComponent, KelvinToCelciusPipe,MtrPersecToKmPerhrPipe],
        providers: [DataService, DirectAccessGuard, WeatherService,CityService]

    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have cities aray value greater than 0', () => {
    component.ngOnInit();
    component.cities = component.cityService.getCities().slice();
    expect(component.cities.length).toBeGreaterThan(0);
  });

  it('should navigate to weather-details', () => {
    component.ngOnInit();
    const accessGuard = fixture.debugElement.injector.get(DirectAccessGuard);
    const dataService = fixture.debugElement.injector.get(DataService);
    let cityIndex = 1;
    fixture.detectChanges(); 
    component.onClickCity(cityIndex);
    spyOn(accessGuard,'setAllowRouteChange');    
    spyOn(dataService,'sendCityWeatherInfo'); 
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(dataService.sendCityWeatherInfo).toHaveBeenCalledWith(component.cities, cityIndex);
        expect(accessGuard.setAllowRouteChange).toHaveBeenCalledWith(true);
    });
    
    
});

});
