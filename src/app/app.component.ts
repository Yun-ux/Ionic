import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Binding',
      icon:'heart',
      url: '/exemple1'
    },
    {
      title: 'Event',
      icon: 'flash',
      url: '/exemple2'
    },
    {
      title: 'Chronometre',
      icon: 'alarm',
      url: '/exercice1'
    },
    {
      title:'ngIf',
      icon:'star',
      url: '/exemple3'
    },
    {
      title:'ngFor',
      icon:'flower',
      url: '/exemple4'
    },
    {
    title:'Binding 2 Ways',
    icon: 'wine',
    url: '/exemple5'
  },
  {
    title:'Exercice2',
    icon:'flame',
    url: '/exercice2'
  },
  {
    title:'Weather',
    icon: 'at',
    url: '/api'
  },
  {
    title:'Pokedex',
    icon:'flask',
    url:'/pokedex'
  }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
