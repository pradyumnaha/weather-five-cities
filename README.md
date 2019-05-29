# WeatherFiveCities

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --code-coverage` to see the coverage

## Built With

1. Angular 7, Typescript, Javascript, Bootstrap 4, HTML5, CSS3, RxJS, Chart.js, Jasmine+Karma
2. Main features of Angular 7 used in this project: Components, directives (structural directives), routing, Can Activate guard, pipes(built-in and custom), services, model, behavioursubject, HttpClient
3. CSS3 animations

## API
https://openweathermap.org

## About the application

1. This application shows weather information for 5 European cities namely Amsterdam, Zurich, Paris, Barcelona and Milan.
2. In the Home screen, all the 5 cities are displayed to the user with information like City name, Icon for current weather state, Temperature, Wind strength, Latitude, Longitude and Country code.
3. When the user clicks on any of these 5 cities, weather information for that particular city will be displayed in detail in weather-details screen.
4. User is allowed to navigate to weather-details screen only by clicking a city in the home screen. Directly modifying the URL will cause re-direction to home screen.
5. In Current Conditions section of weather-details screen, current weather conditions like Temperature, Min Temperature, Max Temperature, Wind speed and weather description will be displayed along with the temperatures for next 3 days.
6. In Next 24hrs Forecast section of weather-details screen, a chart is displayed which gives information on wind and min/max temperatures for every 3hrs of next 24hrs.
7. User can choose to go back to the home screen by clicking the Home button in the weather-details screen or by browser back button.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
