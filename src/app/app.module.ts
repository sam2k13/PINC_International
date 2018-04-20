import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";

import { OverviewPage } from '../pages/overview/overview';
import { MapsPage } from '../pages/maps/maps';
import { ReferencePage } from '../pages/reference/reference';
import { CheckinPage } from '../pages/checkin/checkin';

import { PackingPage } from '../pages/packing/packing';
import { ExpressionsPage } from '../pages/expressions/expressions';
import { PlacesPage } from '../pages/places/places';
import { PlaceItemsPage } from '../pages/placeItems/placeItems';
import { PlaceItemDetailsPage } from '../pages/placeItemDetails/placeItemDetails';
import { FoodPage } from '../pages/food/food';
import { ContactPage } from '../pages/contact/contact';



import { SearchDetailPage } from '../pages/searchDetail/searchDetail';
import { TabsPage } from '../pages/tabs/tabs';

import { ExpressionFilter } from '../shared/pipes/expressionFilter'
import { FoodFilter } from '../shared/pipes/foodFilter'

import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
 GoogleMaps
} from '@ionic-native/google-maps';

@NgModule({
  declarations: [

    MyApp,
    CountDown,
    TabsPage,
    OverviewPage,
    MapsPage,
    PackingPage,
    ExpressionsPage,
    ReferencePage,
    SearchDetailPage,
    CheckinPage,
    FoodPage,
    ContactPage,
    PlacesPage,
    PlaceItemsPage,
    PlaceItemDetailsPage,
    ExpressionFilter,
    FoodFilter
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OverviewPage,
    MapsPage,
    PackingPage,
    ReferencePage,
    ExpressionsPage,
    TabsPage,
    CheckinPage,
    FoodPage,
    ContactPage,
    PlacesPage,
    PlaceItemsPage,
    PlaceItemDetailsPage,
    SearchDetailPage
  ],
  providers: [
    GoogleMaps,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
