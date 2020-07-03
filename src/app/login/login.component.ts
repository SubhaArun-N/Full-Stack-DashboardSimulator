import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'subha';
  password = '';

  invalidLogin = false;
  constructor(private router: Router,public loginService:AuthenticationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }  


  checkUserLogin(){  
    if(this.loginService.authenticate(this.username, this.password)){
      //this.router.navigate(['home']);
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
