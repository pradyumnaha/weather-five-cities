import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class DirectAccessGuard implements CanActivate {
  allowRouteChange: boolean = false;
  constructor(private router: Router) {}

  canActivate(): boolean {
    //Allows navigation to weather-details screen only if city is clicked in the home screen.
    //Direct URL modification to weather-details screen is not allowed.
    if(this.allowRouteChange){
        return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  setAllowRouteChange(allowVal: boolean){
    this.allowRouteChange = allowVal;
  }
}