//Cross component communication handled using BehaviorSubject.
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private citySubject = new BehaviorSubject<any>('');
  currentCitySubject = this.citySubject.asObservable();
  private selectedCitySubject = new BehaviorSubject<any>('');
  currentSelectedCitySubject = this.selectedCitySubject.asObservable();

  private hmeBtndisplaySubject = new BehaviorSubject<any>('');
  currentHmeBtndisplaySubject = this.hmeBtndisplaySubject.asObservable();
  constructor(){}

 sendCityWeatherInfo(cityInfo, cityIndex) {
   //Data related to city is published.
   this.citySubject.next(cityInfo);
   this.selectedCitySubject.next(cityIndex);
 }

 sendHomeBtnDisplayInfo(display) {
   //Data related to home button display is published.
  this.hmeBtndisplaySubject.next(display);
}

}
