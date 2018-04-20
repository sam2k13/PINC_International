import { Component } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';
import { PlaceItemDetailsPage } from '../placeItemDetails/placeItemDetails';

@Component({
  selector: 'page-placeItems',
  templateUrl: 'placeItems.html'
})

export class PlaceItemsPage {


  place;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, private navParams: NavParams) {
    this.place = navParams.get('place');
  }

  view(item){
    this.navCtrl.push(PlaceItemDetailsPage, { item : item });
  }

}
