import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '1e4a0bdb251c64e4';
  //apiKey = '91e1a06a02f9441aa1a06a02f9241a8e';
  
  //apiKey = '684e29e220f3d2f6e7e1662253ab6a38';
  url: string;
  queryNotFound: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/'
    //this.url = 'https://api.darksky.net/forecast/684e29e220f3d2f6e7e1662253ab6a38/37.8267,-122.4233'+ this.apiKey +'/conditions/q/'
  }

  getWeather(state, city) {
    return this.http.get(this.url + state + '/' + city + '.json').map(res => res);
  }
}