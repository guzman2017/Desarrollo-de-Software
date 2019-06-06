import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../services/weather';
import { Storage } from '@ionic/storage';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html'
})
export class LocalWeatherPage {
  weather: any;
  location: {
    state: string,
    city: string
  }

  public locationList: Array<any> = [
    //Agregando las ciudades para mostrar el clima 

    {city: 'Quito', state: 'EC'},
    {city: 'Latacunga', state: 'EC'},
    {city: 'Ambato', state: 'EC'},
    {city: 'Guayaquil', state: 'EC'},
    {city: 'Machala', state: 'EC'},
    {city: 'Ibarra', state: 'EC'},
    {city: 'Cuenca', state: 'EC'},
   
  ]

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage) {
  }

  ionViewWillEnter() {

    this.storage.get('location').then((val) => {
      if (val != null) {
        this.location = JSON.parse(val);

      } else {
        this.location = {
          //ciudad clima por defecto Quito
          state: 'EC',
          city: 'Quito'
        }
      }

      this.getWeather(this.location)

    });

  }

  public getWeather(location) {
    if (typeof location === 'string') {
      this.location = JSON.parse(location);
      console.log(this.location);
    } else {
      this.location = location;
    }

    this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe((weather: any) => {
      this.weather = weather.current_observation;
    });
  }

}
