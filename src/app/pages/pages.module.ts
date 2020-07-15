import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from  '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { NbCardModule } from '@nebular/theme';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { ZohoCardComponent } from './api-integration/zoho-card/zoho-card.component';
import { QuickbooksCardComponent } from './api-integration/quickbooks-card/quickbooks-card.component';
import { AmazonsellerCardComponent } from './api-integration/amazonseller-card/amazonseller-card.component';
import { ZohocrmDataComponent } from './api-integration/zohocrm-data/zohocrm-data.component';
import { QuickbooksDataComponent } from './api-integration/quickbooks-data/quickbooks-data.component';
import { ZohointegrationInformationComponent } from './api-integration/zohointegration-information/zohointegration-information.component';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    

    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NbCardModule,
    MatButtonModule,

  ],
  declarations: [
    PagesComponent,
    ApiIntegrationComponent,
    ZohoCardComponent,
    QuickbooksCardComponent,
    AmazonsellerCardComponent,
    ZohocrmDataComponent,
    QuickbooksDataComponent,
    ZohointegrationInformationComponent,
  ],
})
export class PagesModule {
}
