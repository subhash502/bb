import { Geolocation } from '@ionic-native/geolocation';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from './../pages/intro/intro';
import { LoginPage } from './../pages/login/login';
import { SignupPage } from './../pages/signup/signup';
import { MenuPage } from './../pages/menu/menu';
import { LocationPage } from './../pages/location/location';
import { CartPage } from './../pages/cart/cart';
import { HelpPage } from './../pages/help/help';
import { PricingPage } from './../pages/pricing/pricing';
import { AccountPage } from './../pages/account/account';
import { ModalAutocompleteItemsPage } from './../pages/modal-autocomplete-items/modal-autocomplete-items';
import { PageGmapAutocompletePage } from './../pages/page-gmap-autocomplete/page-gmap-autocomplete';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    LoginPage,
    SignupPage,
    MenuPage,
    LocationPage,
    CartPage,
    HelpPage,
    PricingPage,
    AccountPage,
    ModalAutocompleteItemsPage,
    PageGmapAutocompletePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    LoginPage,
    SignupPage,
    MenuPage,
    LocationPage,
    CartPage,
    HelpPage,
    PricingPage,
    AccountPage,
    ModalAutocompleteItemsPage,
    PageGmapAutocompletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
