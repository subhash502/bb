import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { IntroPage } from './../pages/intro/intro';
import { LoginPage } from './../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  splash = true;

  rootPage: any = IntroPage;
  loader: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController, public storage: Storage) {
    // this.initializeApp();

    this.presentLoading();
   
       this.platform.ready().then(() => {
    
         this.storage.get('introShown').then((result) => {
    
           if(result){
            
            setTimeout(() => {
              this.splash = false;
            }, 3000);
             this.rootPage = LoginPage;
           } else {
            
            setTimeout(() => {
              this.splash = false;
            }, 3000);
             this.rootPage = IntroPage;
             this.storage.set('introShown', true);
           }
    
           this.loader.dismiss();
    
         });
    
       });    

   }

  presentLoading() {
    
       this.loader = this.loadingCtrl.create({
         content: "Loading..!"
       });
    
       this.loader.present();
    
     }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 
}
