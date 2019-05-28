import { City } from '../models/city.model';
import { CityService } from './city.service';

describe('CityService', () => {
  const cityService = new CityService();
  const cities = [
    new City('Amsterdam','NL','../../assets/images/amsterdam.png'),
    new City('Zurich','CH','../../assets/images/zurich.png'),
    new City('Paris','FR','../../assets/images/paris.png'),
    new City('Barcelona','ES','../../assets/images/barcelona.png'),
    new City('Milan','IT','../../assets/images/milan.png')
];

  it('should be created', () => {
    expect(cityService).toBeTruthy();
  });

  it(`should have cities array with len'`, () => {
    expect(cities.length).toEqual(5);
  });

  it('should return an array of cities', () => {
    expect(cityService.getCities()).toEqual(cities);
  });
});
