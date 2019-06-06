import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";
import {MyApp} from "./app.component";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {FIREBASE_INFO} from "./firebase.info";
import { PusherServiceProvider } from '../providers/pusher-service/pusher-service';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { FormsModule } from '@angular/forms';
import { GameProvider } from '../providers/game/game';
import { HttpModule } from "@angular/http";
import { PaqueteProvider } from '../providers/paquete/paquete';
import { ProveedorProvider } from '../providers/proveedor/proveedor';
import { GuiaProvider } from '../providers/guia/guia';
import { ActividadesProvider } from '../providers/actividades/actividades';
import { ItinerarioProvider } from '../providers/itinerario/itinerario';



@NgModule({
  declarations: [
    MyApp,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
   HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_INFO),
    IonicModule.forRoot(MyApp,
        {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    PusherServiceProvider,
    ChatServiceProvider,
    GameProvider,
    PaqueteProvider,
    ProveedorProvider,
    GuiaProvider,
    ActividadesProvider,
    ItinerarioProvider
  ]
})

export class AppModule {
}
