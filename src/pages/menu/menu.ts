import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { CartPage } from './../cart/cart';
import { HelpPage } from './../help/help';
import { PricingPage } from './../pricing/pricing';
import { AccountPage } from './../account/account';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public userDetails: any;

  homePage: Component;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    const data = JSON.parse(localStorage.getItem('data'));
    this.userDetails = data.userData; 
    this.homePage = HomePage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  onGoToLogout() {
    localStorage.clear();
    setTimeout(() => this.backToWelcome, 2000);
    this.navCtrl.push(LoginPage);
  }

  onGoToAccount() {
    this.navCtrl.push(AccountPage);
  }

  onGoToPricing() {
    this.navCtrl.push(PricingPage);
  }

  onGoToHelp() {
    this.navCtrl.push(HelpPage);
  }

  onGoToCart() {
    this.navCtrl.push(CartPage);
  }
}
