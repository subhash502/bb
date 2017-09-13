import { MenuPage } from './../menu/menu';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  resonseData : any;
  data : any;
  signup_form : any;
  constructor(private navCtrl: NavController, public authService : AuthServiceProvider, public formbuilder :FormBuilder, private alert :AlertController) {
    
    this.signup_form = this.formbuilder.group({
      "name": ["", Validators.required],
      "username": ["", Validators.required],
      "email": ["", Validators.required],
      "password": ["", Validators.required],
      "cpassword": ["", Validators.required]
    })
    
    this.data = {};
    this.data.name = "";
    this.data.username = "";
    this.data.email = "";
    this.data.password = "";
  }

  signup(){

    let password = this.data.password;
    let cpassword = this.data.cpassword;

    if(password === cpassword){

    this.authService.postData(this.data,"signup").then((result) => {
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
  } else {
      let alert = this.alert.create({
        title: 'Warning',
        subTitle: 'Password Do not Match! Please Try Again !',
        buttons: ['OK']
    });
    alert.present();
    }

}

}
