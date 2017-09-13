import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { MenuPage } from './../menu/menu';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  resonseData : any;
    data : any;
    login_form : any;
  
    constructor(private navCtrl: NavController, public authService : AuthServiceProvider, public formbuilder :FormBuilder, private alert :AlertController) {
      
      if(localStorage.getItem('data')){
        this.navCtrl.setRoot(MenuPage);
      }
      
      this.login_form = this.formbuilder.group({
        "username": ["", Validators.required],
        "password": ["", Validators.required]
      })
  
      this.data = {};
      this.data.username = "";
      this.data.password = "";
    }
  
     login(){
      // let data = {"username":"", "password":""};
  
      this.authService.postData(this.data,"login").then((result) => {
        this.resonseData = result;
        console.log(this.resonseData);
        localStorage.setItem('data',JSON.stringify(this.resonseData));
        this.navCtrl.push(MenuPage);
    },error => {
        let alert = this.alert.create({
            title: 'Warning',
            subTitle: 'There is an error! Please Try Again !',
            buttons: ['OK']
        });
        alert.present();
    });
    }
  
    onGoToSignup() {
      this.navCtrl.push(SignupPage);
    }

}
