import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../service/authentication.service';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  username = 'subha';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }  

  checkUserLogin(){  
    if(this.loginService.authenticate(this.username, this.password)){
      this.router.navigate(['pages/dashboard']);
      this.invalidLogin = false;
      //error=>console.log(error));
    // this.credentials=new Credentials();
   }else{
     this.invalidLogin = true;
   }}

    onSubmit()
   {
     this.checkUserLogin();
   }

}
