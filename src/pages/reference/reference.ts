import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpressionsPage } from '../expressions/expressions';
import { PackingPage } from '../packing/packing';
import { FoodPage } from '../food/food';
import { MapsPage } from '../maps/maps';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-reference',
  templateUrl: 'reference.html'
})
export class ReferencePage {

  constructor(public navCtrl: NavController) {

  }

  view(pageType) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    console.log(pageType);
    if(pageType == 'expressions'){
      this.navCtrl.push(ExpressionsPage);
    }
    else if(pageType == 'packing'){
      this.navCtrl.push(PackingPage);
    }
    else if(pageType == 'food'){
      this.navCtrl.push(FoodPage);
    }
    else if(pageType == 'places'){
      this.navCtrl.push(PlacesPage);
    }
    else if(pageType == 'maps'){
      this.navCtrl.push(MapsPage);
    }

  }

}
