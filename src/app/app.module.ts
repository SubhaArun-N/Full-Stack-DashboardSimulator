import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule, NbSidebarModule, NbDialogModule, NbLayoutModule, NbSidebarService, NbInputModule, NbMenuItem, NbMenuModule, NbCardModule } from '@nebular/theme';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatIconModule } from  '@angular/material/icon';
import { MatListModule } from  '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ZohocrmCardComponent } from './zohocrm-card/zohocrm-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZohocardMainComponent } from './zohocard-main/zohocard-main.component';
import { AmazoncardMainComponent } from './amazoncard-main/amazoncard-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppMenuComponent,
    ApiIntegrationComponent,
    LogOutComponent,
    ZohocrmCardComponent,
    DashboardComponent,
    ZohocardMainComponent,
    AmazoncardMainComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    NbInputModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    NbIconModule,
    NbCardModule,
    MatRippleModule,    
    MatGridListModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),    
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
