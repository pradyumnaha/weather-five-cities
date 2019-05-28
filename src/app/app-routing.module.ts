import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { DirectAccessGuard } from './shared/services/direct-access-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'weather-details',
    component: WeatherdetailsComponent,
    canActivate: [DirectAccessGuard]    
  },
  {
    path: '**',
    redirectTo: '/'     
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [DirectAccessGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
