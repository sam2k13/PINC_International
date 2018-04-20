import { Component } from '@angular/core';

import { OverviewPage } from '../overview/overview';
import { MapsPage } from '../maps/maps';
import { ReferencePage } from '../reference/reference';
import { CheckinPage } from '../checkin/checkin';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OverviewPage;
  tab2Root = ContactPage;
  tab3Root = ReferencePage;
  tab4Root = CheckinPage;

  constructor() {

  }
}
