import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-packing',
  templateUrl: 'packing.html'
})
export class PackingPage {

  packingList = [{ group: 'Important Items', icon : 'alert', items : [ { name : 'University ID', checked : false }, { name : 'Photocopied information for parents: Remember this!', checked : false }, { name : '2 photocopies of passport', checked : false } , { name : 'Journal (Seriously, you are going to want to remember this trip!)', checked : false }, { name :  'Photocopy important information and leave it secure with your parents i.e. passport & credit cards', checked : false }] },
  { group: 'Clothing', icon : 'shirt', items : [ { name : 'Light dresses (Internship/ Networking Events)',  checked : false }, { name : 'Flowy tops and skirts (Internship/ Networking Events)', checked : false }, { name :  'A light blazer or cardigan (Internship/Networking Events)', checked : false }, { name : 'Shorts, tops and maxi dresses (Leisure)', checked : false }, { name : 'Flats i.e. sandals and ballet flats', checked : false }, { name : 'Wedges - if you want to bring any kind of heels', checked : false }, { name : 'Sneakers', checked : false }, { name : 'Bathing suit', checked : false }, { name : 'A shawl or light-weight pants (needed to enter Cathedrals)', checked : false }, { name : 'Light pajamas', checked : false }, { name : 'One pair of jeans', checked : false }, { name : 'Cap/Baseball cap', checked : false } ] },
  { group: 'Personal Items', icon : 'body', items : [{ name : 'Deodorant', checked : false }, { name : 'Shower towel', checked : false }, { name : 'Flat iron/Curling iron/Hairdryer', checked : false }, { name : 'Make-up (Sephora, Kiko, etc. are available in Spain)', checked : false }, { name : 'Medication i.e. prescriptions, Neosporin, Benadryl, Anti-Histamines, Allergy Meds, Musinex', checked : false }] },
  { group: 'Work/Technology', icon : 'briefcase', items : [ { name : 'Voltage converter also called "power adapters', checked : false }, { name : 'Work bag with secure zipper', checked : false }, { name : 'Laptop Computer for Internship (Optional for Immersion)', checked : false }] },
  { group: 'Out and About', icon : 'sunny', items : [ { name : 'Secure going out bag preferable with zipper (NO magnet secure bags)', checked : false }, { name : 'Sunglasses with UV protection', checked : false }, { name : 'Beach Towel', checked : false }, { name : 'Sun block', checked : false }, { name : 'Foldable eco-bag, tupperware for lunches (optional)', checked : false }] }];

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController) {
    storage.get('packingList').then((val) => {
        if(val != null){
          this.packingList = val;
        }
      });
  }

  updateList(){
    this.storage.set('packingList', this.packingList);
  }

  resetList(){
    let alert = this.alertCtrl.create({
    title: 'Clear Packing List',
    message: 'Are you sure you want to uncheck all the items?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('No clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.storage.set('packingList', null);
          for(var i in this.packingList){
            for(var x in this.packingList[i].items){
              this.packingList[i].items[x].checked = false;
            }
          }
        }
      }
    ]
  });
  alert.present();
  }

}
