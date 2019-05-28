//Pipe to convert temperature in Kelvin to degree Celcius.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelcius'
})
export class KelvinToCelciusPipe implements PipeTransform {

  transform(value: any) {
    return Math.round(value- 273.15);
  }

}
