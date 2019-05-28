//Pipe to convert wind speed in meter/sec to km/h.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mtrPersecToKmPerhr'
})
export class MtrPersecToKmPerhrPipe implements PipeTransform {

  transform(value: any) {
    return Math.round((value*3.6) * 100) / 100;
  }

}
