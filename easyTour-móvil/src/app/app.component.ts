import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
   
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Clima Local', component: LocalWeatherPage, icon: 'partly-sunny'},
     
    ];

   
  }

 

  initializeApp() {
    this.platform.ready().then(() => {
     

      //*** Control Barra de estado
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Teclado
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
   
    this.nav.setRoot(page.component);
  }

  //Funcion salir de la app
  logout() {
    this.nav.setRoot(LoginPage);
  }

}
