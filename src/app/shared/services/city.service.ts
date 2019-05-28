import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable()
export class CityService {
    //Pre-loading objrcts of 5 cities into cities array.
    private cities: City[] = [
        new City('Amsterdam','NL','../../assets/images/amsterdam.png'),
        new City('Zurich','CH','../../assets/images/zurich.png'),
        new City('Paris','FR','../../assets/images/paris.png'),
        new City('Barcelona','ES','../../assets/images/barcelona.png'),
        new City('Milan','IT','../../assets/images/milan.png')
    ];

    constructor() {}

    getCities(){
        return this.cities.slice();
    }

}