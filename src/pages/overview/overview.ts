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

  schedule = [{ id : 'day1', title : 'Day 1', date_iso : '2018-05-19', date : 'Saturday, May 19', quote : 'How would you describe yourself to a stranger? What motivates you to be the best version of yourself?', quote_author : '', items : [ { time : '', title : 'Airport Pick-Up', details : ['Adolfo Suárez Madrid–Barajas Airport'] },
  { time : '', title : 'Apartment Check-In', details :['Calle de Don Ramón de la Cruz, 37, 28001 Madrid, Spain'] },
  { time : '', title : 'Get Settled', details : ['Unpack', 'Apartment Orientation', 'Cell Phone Set-up'] },
  { time : '', title : 'Explore New Barrio (Salamanca)', details : [] }]
  },
  { id : 'day2', title : 'Day 2', date : 'Sunday, May 20', date_iso : '2018-05-20', quote : 'What about today was surprising? Why? What inspires you?', quote_author : '', items : [ { time : '11:00am', title : 'Orientation', details : ['Hubr Conference Room'] },
  { time : '2:00pm', title : 'Meet & Greet', details : [] },
  { time : '5:00pm', title : 'Workshop #1: Madrid Then & Now', details : [] }]
  },
  { id : 'day3', title : 'Day 3', date : 'Monday, May 21', date_iso : '2018-05-21', quote : 'If you were fearless what would you do? What about today fascinated you the most?', quote_author : '', items : [ { time : '9:00am - 1:30am', title : 'Internship: Spanish Class', details : ['LAE Madrid, Calle de Montesa, 35 2nd floor'] },
  { time : '11:45am - 1:30pm', title : 'Immersion: Spanish Class', details : [] },
  { time : '1:30pm', title : 'Spanish School Welcome Lunch', details : ['Calle de Juan Bravo, 54'] },
  { time : '5:00pm', title : 'Royal Palace & Garden', details : ['Plaza de Oriente','Metro: Ópera (L2 and L5)'] }]
  },
  { id : 'day4', title : 'Day 4', date : 'Tuesday, May 22', date_iso : '2018-05-22', quote : 'What’s something that inspired or touched you recently? Are you using your time here wisely?', quote_author : '', items : [ { time : '9:00am - 1:30pm', title : 'Internship: Spanish Class', details : [] },
  { time : '11:45am - 1:30pm', title : 'Immersion: Spanish Class', details : [] },
  { time : '3:00pm', title : 'Cultural Event', details : ['LAE Madrid, Calle de Montesa, 35 2nd floor'] },
  { time : '5:30pm', title : 'El Prado Museum', details : ['Calle Ruíz de Alarcón, 23','Metro: Banco de España L2'] }]
  },
  { id : 'day5', title : 'Day 5', date : 'Wenesday, May 23', date_iso : '2018-05-23', quote : 'How did you feel waking up this morning? Am I taking anything for granted?', quote_author : '', items : [ { time : '9:00am - 1:30pm', title : 'Internship: Spanish Class', details : [] },
  { time : '11:45am - 1:30pm', title : 'Immersion: Spanish Class', details : [] },
  { time : '2:00pm', title : 'Lunch at Gourmet Experience', details : ['Centro Comercial El Corte Inglés, Plaza del Callao, 2, 28013 Madrid','Metro: Callao L3, L5'] },
  { time : '6:00pm', title : 'Reina Sofia Museum', details : ['Calle de Santa Isabel, 52','Metro: Atocha L1'] }]
  },
  { id : 'day6', title : 'Day 6', date : 'Thursday, May 24', date_iso : '2018-05-24', quote : 'What do you value when building new relationships? Are you living true to yourself?', quote_author : '', items : [ { time : '9:00am - 1:30pm', title : 'Internship: Spanish Class', details : [] },
  { time : '11:45am - 1:30pm', title : 'Immersion: Spanish Class', details : [] },
  { time : '3:00pm', title : 'Boat Rides in Royal Retiro Park', details : ['Plaza de la Independencia, 7','Metro: Retiro L2'] },
  { time : '8:00pm - 10:00pm', title : 'Workshop #2: Mentorship Workshop', details : [] }]
  },
  { id : 'day7', title : 'Day 7', date : 'Friday, May 25', date_iso : '2018-05-25', quote : 'How have you used your talents and abilities recently and what have you enjoyed about doing that? Are you waking up each morning ready to take on the day?', quote_author : '', items : [ { time : '9:00am - 1:30pm', title : 'Internship: Spanish Class', details : [] },
  { time : '11:45am - 1:30pm', title : 'Immersion: Spanish Class', details : [] },
  { time : '1:30pm', title : 'Spanish Certificate Ceremony', details : [] },
  { time : '2:00pm', title : 'Lago Swimming Pool & Picnic', details : ['Metro: Lago L10'] }]
  },
  { id : 'day8', title : 'Day 8', date : 'Saturday, May 26', date_iso : '2018-05-26', quote : 'Have you experienced any blessings in disguise lately—things that didn’t turn out as you’d hoped and yet turned out for the best? What gives your life meaning?', quote_author : '', items : [ { time : '9:30am', title : 'Leave Apartment', details : [] },
  { time : '10:15am', title : 'Bus to Segovia', details : ['Plaza Mayor - Explore and Lunch', 'Independent Exploration', 'Cathedral', 'Aqueduct'] },
  { time : '5:00pm', title : 'Bus to Madrid', details : [] }]
  },
  { id : 'day9', title : 'Day 9', date : 'Sunday, May 27', date_iso : '2018-05-27', quote : 'What are some choices you’ve made this week that you will thank yourself for in the future? If money wasn’t an issue, what would you do with your time?', quote_author : '', items : [ { time : '6:00am', title : 'Leave Apartment', details : [] },
  { time : '7:30am', title : 'Train Departs Atocha Renfe', details : [] },
  { time : '10:40am', title : 'Train Arrives in Barcelona', details : [] },
  { time : '1:00pm', title : 'Lunch/Barceloneta Beach', details : [] },
  { time : '4:00pm', title : 'Walking Tour (optional)', details : [] },
  { time : '7:00pm', title : 'Sagrada Familia', details : ['Carrer de Mallorca, 401, 08013 Barcelona'] }]
  },
  { id : 'day10', title : 'Day 10', date : 'Monday, May 28', date_iso : '2018-05-28', quote : 'What is there about a challenge you’re experiencing right now that you can learn from and be thankful for? What does family mean to you? What makes you smile?', quote_author : '', items : [ { time : '9:30', title : 'Parc Guell', details : ['08024 Barcelona'] },
  { time : '12:00', title : 'Barceloneta Beach', details : [] },
  { time : '7:00', title : 'Family Dinner', details : [] }]
  },
  { id : 'day11', title : 'Day 11', date : 'Tuesday, May 29', date_iso : '2018-05-29', quote : 'What’s one thing you experienced recently that made you feel a sense of wonder or awe? What’s your perfect day, from the moment you wake up until you head to bed at night?', quote_author : '', items : [ { time : '10:00am', title : 'Check Out from Hostel', details : [] },
  { time : '11:00am', title : 'Walking Tour (optional)', details : [] },
  { time : '2:00pm', title : 'Open Exploration', details : ['Las Ramblas'] },
  { time : '2:00pm', title : 'Meet at Sants Ave Train Station', details : ['Carrer Numància, 08906 L\'Hospitalet de Llobregat, Barcelona'] },
  { time : '5:45pm', title : 'Train arrives in Madrid', details : [] }]
  },
  { id : 'day12', title : 'Day 12', date : 'Wednesday, May 30', date_iso : '2018-05-30', quote : 'What does it mean to live authentically? What are you most grateful for?', quote_author : '', items : [ { time : '', title : 'Rejuvenating morning', details : [] },
  { time : '2:00pm', title : 'Meet Women from US Embassy', details : [] },
  { time : '3:30pm', title : 'Workshop #3: Communicating Effectively', details : ['Hubr Conference Room'] },
  { time : '9:00pm', title : 'Temple of Debod', details : ['Calle Ferraz, 1, 28008 Madrid','Metro: Plaza de España'] }]
  },
  { id : 'day13', title : 'Day 13', date : 'Thursday, May 31', date_iso : '2018-05-31', quote : 'What is something you’re grateful to have learned this week? What do you want to be the best in the world at?', quote_author : '', items : [ { time : '8:00am', title : 'Out the Apartment Door', details : ['Tentative bus from Plaza Elíptica at 8:59am'] },
  { time : '10:00am', title : 'Arrive Toledo', details : ['Plaza de Zocodover'] },
  { time : '5:00pm', title : 'Leave Toledo', details : [] },
  { time : '6:30pm', title : 'Azotea del Círculo', details : ['Calle de Alcalá, 42'] }]
  },
  { id : 'day14', title : 'Day 14', date : 'Friday, June 1', date_iso : '2018-06-01', quote : 'Have you noticed any changes in yourself recently? What are the biggest things you’ve learned in life thus far?', quote_author : '', items : [ { time : '10:30am - 1:30pm', title : 'Workshop #4: Reap the Benefits of Travel on Your Resume: Talking about Your Time Abroad', details : ['Hubr Conference Room'] },
  { time : '2:30pm', title : 'Group Lunch', details : [] },
  { time : '4:00pm', title : 'Pack Up & Debrief', details : [] }]
  },
  { id : 'day15', title : 'Day 15', date : 'Saturday, June 2', date_iso : '2018-06-02', quote : '', quote_author : '', items : [ { time : '', title : 'Adios y Hasta Luego to Immersion Ladies', details : [] },
  { time : '', title : 'INTERNSHIP MOVES TO NEW APARTMENT', details : [] },
  { time : '', title : 'GOAL SETTING FOR INTERNSHIP PERIOD', details : [] }]
  }];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    var now = new Date();
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
