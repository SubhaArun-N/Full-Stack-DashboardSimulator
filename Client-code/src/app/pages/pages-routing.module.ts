import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ApiIntegrationComponent} from './api-integration/api-integration.component';
import {FieldmappingComponent} from './fieldmapping/fieldmapping.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { RoleGaurdService } from './role-gaurd.service';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',      
      component: DashboardComponent,
    },
    {
      path: 'apiintegration',
      component: ApiIntegrationComponent,
    },
    {
      path: 'fieldmapping',
      component: FieldmappingComponent,
    },
    {
      path: 'forgotpassword',
      component: ForgotpasswordComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
        
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
