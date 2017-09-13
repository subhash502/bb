import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageGmapAutocompletePage } from './../page-gmap-autocomplete/page-gmap-autocomplete';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToLocation() {
    this.navCtrl.push(PageGmapAutocompletePage);
  }

}
