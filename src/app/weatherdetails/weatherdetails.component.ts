import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { City } from '../shared/models/city.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {
  cities: City[];
  tempLineChart;
  windBarChart;
  selectedCityIndex: number;
  selectedCityDetails;
  hideTempChart: boolean = true;
  hideWindChart: boolean = false;
  nextThreeDaysWeather = [];
  selectedCityWeatherList = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {    
    //Subscribing to data related to city.
    this.dataService.currentCitySubject.subscribe(cityInfo => {
      this.cities = cityInfo;
    });

    this.dataService.currentSelectedCitySubject.subscribe(cityIndex => {
      this.selectedCityIndex = cityIndex;
      this.updateSelectedCity();
    });

    for(let i=8; i<this.selectedCityWeatherList.length; i+=8){
      if(this.nextThreeDaysWeather.length < 3){
        this.nextThreeDaysWeather.push(this.selectedCityWeatherList[i]);
      }
      else{
        break;
      }
    }
    
    this.createTempChart();
    this.createWindChart();

    this.hideTempChart = true;
    this.hideWindChart = false;
    this.dataService.sendHomeBtnDisplayInfo(true);   
  }

  updateSelectedCity() {
    this.selectedCityDetails = this.cities[this.selectedCityIndex];
    this.selectedCityWeatherList = this.selectedCityDetails.cityWeather.list;
  }

  onTempClick(){
    //Show wind chart and hide temp chart.
    this.hideTempChart = false;
    this.hideWindChart = true;
  }

  onWindClick(){
    //Show temp chart and hide wind chart.
    this.hideTempChart = true;
    this.hideWindChart = false;
  }

  createTempChart(){
    //Creating chart.js - Line chart object and loading it with the data to be dispalyed.
    let tempMax = this.selectedCityWeatherList.map(res => Math.round(res.main.temp_max- 273.15));
    let tempMin = this.selectedCityWeatherList.map(res => Math.round(res.main.temp_min- 273.15));
    let allDates = this.selectedCityWeatherList.map(res => res.dt);
    let weatherDates = this.getDisplayedWeatherDates(allDates, 8);

    this.tempLineChart = new Chart('tempLineChart', {
      type: 'line',
      data: {
        labels: weatherDates, 
        datasets: [
          {
            label: "MAX Temp",
            data: tempMax, 
            borderColor: '#00AEFF',
            fill: false
          },
          {
            label: "MIN Temp",
            data: tempMin,
            borderColor: '#00008B',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: 'MIN/MAX Temperature'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            },
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Temperature in deg Celcius'
            },
          }],
        }
      }
    });
  }

  createWindChart(){
    //Creating chart.js - Bar chart object and loading it with the data to be dispalyed.
    let windSpeed = this.selectedCityWeatherList.map(res => Math.round((res.wind.speed*3.6) * 100) / 100);
    let allDates = this.selectedCityWeatherList.map(res => res.dt);
    let weatherDates = this.getDisplayedWeatherDates(allDates, 8);

    this.windBarChart = new Chart('windBarChart', {
      type: 'bar',
      data: {
        labels: weatherDates,
        datasets: [
          {
            backgroundColor: "#3e95cd",
            data: windSpeed
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Wind speed'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            },
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Wind speed in km/h'
            },
          }],
        }
      }
    });
  }

  getDisplayedWeatherDates(dates, requiredNumOfDates){
    let displayedWeatherDates = [];
    for(let i=0; i < requiredNumOfDates; i++){        
      let date = new Date(dates[i] *1000);
      displayedWeatherDates.push(date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }));      
    }
    return displayedWeatherDates;
  }

}
