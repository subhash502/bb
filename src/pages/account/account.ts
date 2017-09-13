import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public userDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const data = JSON.parse(localStorage.getItem('data'));
    this.userDetails = data.userData; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
