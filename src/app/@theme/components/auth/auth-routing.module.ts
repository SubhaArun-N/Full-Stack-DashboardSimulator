/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AuthComponent} from './auth.component';
import {SigninComponent } from './signin/signin.component';
import {SignupComponent } from './signup/signup.component';

export const routes: Routes = [{
  // .. some other app routs
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'signin',
      component: SigninComponent,
    },
    {
      path: 'signup',
      component: SignupComponent,
    },
        
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}*/