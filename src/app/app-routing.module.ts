import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import {SigninComponent } from './@theme/components/auth/signin/signin.component'
import {SignupComponent } from './@theme/components/auth/signup/signup.component'


export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: 'app/pages/pages.module#PagesModule' },
 
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },  
      {
        path: 'signup',
        component: SignupComponent,
      }    
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
