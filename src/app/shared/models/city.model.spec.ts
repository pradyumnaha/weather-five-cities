import { City } from '../models/city.model';

describe('CityModel', () => {
   const city =  new City('Amsterdam','NL','../../assets/images/amsterdam.png');
  
  it('should create an object of type City', () => {
    expect(city).toBeTruthy();
  });
});
