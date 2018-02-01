import { Component } from '@angular/core';
import {Config, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {DataService} from "../services/data.service";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    dataSvc:DataService,
    config: Config,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      dataSvc.fetchData().then(() => {
        dataSvc.saveData();
      });
      config.set('ios','backButtonText','');
      splashScreen.hide();
    });
  }
}

