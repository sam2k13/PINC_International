import { Component } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-placeItemDetails',
  templateUrl: 'placeItemDetails.html'
})

export class PlaceItemDetailsPage {

  item;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, private navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad(){
    document.getElementById('item-content').innerHTML = this.item.content
  }
}
