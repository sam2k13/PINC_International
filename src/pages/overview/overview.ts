import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PackingPage } from '../packing/packing'
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  @ViewChild(Content) content: Content;

  schedule = [{ id : 'day1', title : 'Day 1 - Adventure', date_iso : '2018-01-01', date : 'Saturday, May 20', quote : '“I have found adventure in flying, in world travel, in business, and even close at hand... Adventure is a state of mind - and spirit.”', quote_author : 'Jacqueline Cochran', items : [ { time : '', title : 'Airport Pick-Up', details : ['Adolfo Suárez Madrid–Barajas Airport'] },
  { time : '', title : 'Apartment Check-In', details :['Calle Cea Bermudez, 15 Madrid 28003'] },
  { time : '', title : 'Get Settled', details : ['Unpack', 'Apartment Orientation', 'Cell Phone Set-up', 'Supermarket'] },
  { time : '', title : 'Explore New Barrio (Chamberí)', details : [] }]
  },
  { id : 'day2', title : 'Day 2 - Adaptibility', date : 'Sunday, May 21', date_iso : '2018-01-02', quote : '“It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change”', quote_author : 'Charles Darwin', items : [ { time : '11:00', title : 'PINC Orientation', details : ['LAE Madrid, Calle de Montesa, 35 2nd floor'] },
  { time : '2:00', title : 'Meet and Greet Lunch', details : [] },
  { time : '7:00', title : 'Workshop #1: Madrid Then & Now Walking Tour', details : [] }]
  },
  { id : 'day3', title : 'Day 3 - Loyalty', date : 'Monday, May 22', date_iso : '2018-01-03', quote : '“Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.”', quote_author : 'Colin Powell', items : [ { time : '9:00 - 1:30', title : 'Internship: Spanish Class', details : ['LAE Madrid, Calle de Montesa, 35 2nd floor'] },
  { time : '11:45 - 1:30', title : 'Spanish Class', details : [] },
  { time : '1:30', title : 'Spanish School Welcome Lunch', details : ['Calle de Juan Bravo, 54'] },
  { time : '5:00', title : 'Royal Palace & Garden', details : ['Plaza de Oriente','Metro: Ópera (L2 and L5)'] }]
  },
  { id : 'day4', title : 'Day 4 - Motivation', date : 'Tuesday, May 23', date_iso : '2018-01-04', quote : '“Once something is a passion, the motivation is there.”', quote_author : 'Michael Schumacher', items : [ { time : '9:00 - 1:30', title : 'Internship: Spanish Class', details : [] },
  { time : '11:45 - 1:30', title : 'Immersion: Spanish Class', details : [] },
  { time : '3:00', title : 'Slice & Sip: Sangria Workshop', details : ['LAE Madrid, Calle de Montesa, 35 2nd floor'] },
  { time : '5:30', title : 'El Prado Museum', details : ['Calle Ruíz de Alarcón, 23','Metro: Banco de España L2'] }]
  },
  { id : 'day5', title : 'Day 5 - Communication', date : 'Wenesday, May 24', date_iso : '2018-01-05', quote : '“Whatever words we utter should be chosen with care for people will hear them and be influenced by them for good or ill.”', quote_author : 'Buddha', items : [ { time : '9:00 - 1:30', title : 'Internship: Spanish Class', details : [] },
  { time : '11:45 - 1:30', title : 'Spanish Class', details : [] },
  { time : '2:00', title : 'Lunch at Gourmet Experience', details : ['Centro Comercial El Corte Inglés, Plaza del Callao, 2, 28013 Madrid','Metro: Callao L3, L5'] },
  { time : '6:00', title : 'Reina Sofia Museum', details : ['Calle de Santa Isabel, 52','Metro: Atocha L1'] }]
  }];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    var now = new Date('2018-01-03');
    for(let day of this.schedule){
      var scheduleDate = new Date(day.date_iso)
      if(now.getDate() == scheduleDate.getDate()){
        console.log(day.id);
        console.log('Content Height: ' + this.content.contentHeight);
        console.log(this.content.getContentDimensions());
        let that = this;
        setTimeout(function (){
          let yOffset = document.getElementById(day.id).offsetTop;
          that.content.scrollTo(0,yOffset,500);
        }, 1000);

      }
    }
  }

  scrollTo() {
    // set the scrollLeft to 0px, and scrollTop to 500px
    // the scroll duration should take 200ms
    this.content.scrollTo(0, 500, 200);
  }

  pushPacking(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(PackingPage);
  }

}
