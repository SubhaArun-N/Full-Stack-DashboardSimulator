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

import {AuthComponent } from './@theme/components/auth/auth.component'

import { SigninComponent } from './@theme/components/auth/signin/signin.component';
import { SignupComponent } from './@theme/components/auth/signup/signup.component';
import { ForgotpwdComponent} from './@theme/components/auth/forgotpwd/forgotpwd.component';
import { ResetpwdComponent }  from './@theme/components/auth/resetpwd/resetpwd.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: 'app/pages/pages.module#PagesModule' },
 
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'signIn',
        component: SigninComponent,
      },  
      {
        path: 'signUp',
        component: SignupComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotpwdComponent,
      }, 
      {
        path: 'confirmation',
        component: ResetpwdComponent,
      },    
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  /*{ path: '**', redirectTo: 'pages' },*/
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
