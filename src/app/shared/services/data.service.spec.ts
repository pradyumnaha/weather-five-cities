import { TestBed, async } from '@angular/core/testing';
import { DataService } from './data.service';
import { City } from '../models/city.model';

describe('DataService', () => {
    const cities = [
        new City('Amsterdam','NL','../../assets/images/amsterdam.png'),
        new City('Zurich','CH','../../assets/images/zurich.png'),
        new City('Paris','FR','../../assets/images/paris.png'),
        new City('Barcelona','ES','../../assets/images/barcelona.png'),
        new City('Milan','IT','../../assets/images/milan.png')
    ];
    beforeEach(() => {
        TestBed.configureTestingModule({
        imports:[],
        declarations: [],
        schemas: [],
        providers: [DataService]
        }).compileComponents();
    });

    xit('should handle WeatherInfo details', (done) => {
        let dataService: DataService = TestBed.get(DataService);
        dataService.sendCityWeatherInfo(cities,3);
        dataService.currentSelectedCitySubject.subscribe((cityInfo) => {
            expect(cityInfo).toEqual(cities);
            done();
        });
        dataService.currentSelectedCitySubject.subscribe((val) => {
            expect(val).toEqual(3);
            done();
        });
    });

    it('should handle HmeBtndisplaySubject state', (done) => {
        let dataService: DataService = TestBed.get(DataService);
        dataService.sendHomeBtnDisplayInfo(false);
        dataService.currentHmeBtndisplaySubject.subscribe((state) => {
            expect(state).toEqual(false);
            done();
        });
    });
    
});