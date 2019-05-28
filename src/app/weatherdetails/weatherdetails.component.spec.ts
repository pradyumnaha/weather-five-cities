import { DataService } from '../shared/services/data.service';
import { TestBed, async } from '@angular/core/testing';
import { WeatherdetailsComponent } from './weatherdetails.component';
import { ComponentFixture } from '@angular/core/testing';
import { KelvinToCelciusPipe } from '../shared/pipes/kelvin-to-celcius.pipe';
import { MtrPersecToKmPerhrPipe } from '../shared/pipes/mtr-persec-to-km-perhr.pipe';

describe('WeatherdetailsComponent', () => {
    let component: WeatherdetailsComponent;
    let fixture: ComponentFixture<WeatherdetailsComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ 
            WeatherdetailsComponent,
            KelvinToCelciusPipe,
            MtrPersecToKmPerhrPipe
         ],
        providers: [DataService ]
      }).compileComponents();
      fixture = TestBed.createComponent(WeatherdetailsComponent);
      component = fixture.debugElement.componentInstance;
    }));
    
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('testing ngoninit', () => {
        component.selectedCityWeatherList = [{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559228400,"main":{"temp":287.9,"temp_min":287.9,"temp_max":287.9,"pressure":1020.65,"sea_level":1020.65,"grnd_level":1020.63,"humidity":84,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":55},"wind":{"speed":8.86,"deg":237.351},"sys":{"pod":"d"},"dt_txt":"2019-05-30 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"}]
        component.nextThreeDaysWeather = [{"dt":1559142000,"main":{"temp":288.693,"temp_min":288.693,"temp_max":288.693,"pressure":1019.03,"sea_level":1019.03,"grnd_level":1018.48,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.08,"deg":218.013},"sys":{"pod":"d"},"dt_txt":"2019-05-29 15:00:00"},{"dt":1559228400,"main":{"temp":287.9,"temp_min":287.9,"temp_max":287.9,"pressure":1020.65,"sea_level":1020.65,"grnd_level":1020.63,"humidity":84,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":55},"wind":{"speed":8.86,"deg":237.351},"sys":{"pod":"d"},"dt_txt":"2019-05-30 15:00:00"}];
        component.ngOnInit();
        expect(component.nextThreeDaysWeather.length).toEqual(3);
    });

    xit('test3', (done) => {
        const cityInfoMock = {
            cityImg: "../../assets/images/amsterdam.png",
            cityName: "Amsterdam",
            cityWeather: {
                city: {
                    id: 2323232,
                    name: "Amsterdam",
                    country: "NL"
                },
                list: [
                    {
                        dt: 1558990800,
                        main: {
                            temp_max: 286.2,
                            temp_min: 286.05
                        },
                        wind: {
                            deg: 274.146,
                            speed: 2.7}
                    }
                ]
            }
        }
        let dataService: DataService = TestBed.get(DataService);
        component.ngOnInit();
        dataService.currentCitySubject.subscribe((cityInfo) => {
            expect(cityInfo).toEqual(cityInfoMock);
            done();
        });

    });

    it('Testing click of onTempClick should make wind chart hide', () => {
        component.onTempClick();
        expect(component.hideTempChart).toBe(false);
        expect(component.hideWindChart).toBe(true);
    });

    it('Testing click of onWindClick should make temperature chart hide', () => {
        component.onWindClick();
        expect(component.hideTempChart).toBe(true);
        expect(component.hideWindChart).toBe(false);
    });
  
  });