import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayHomeButton: boolean = false;
  constructor(private router: Router, private dataService:DataService ) { }

  ngOnInit() {
    this.dataService.currentHmeBtndisplaySubject.subscribe(displayInfo => {
      this.displayHomeButton = displayInfo;
    });
  }
  
  onHomeClick(){
    this.router.navigate(['/']);
    this.displayHomeButton = false;
  }

}
