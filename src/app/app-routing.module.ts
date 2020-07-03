import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { LogOutComponent } from './log-out/log-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
 
  {path: '', component: LoginComponent, outlet:'login-page'},
  {path:'user/logout', component: LogOutComponent },
  {path:'home',component: AppMenuComponent,outlet:'dashboard'},
  {path:'home/api-integration',component: ApiIntegrationComponent},
  {path:'home/dashboard', component: DashboardComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
