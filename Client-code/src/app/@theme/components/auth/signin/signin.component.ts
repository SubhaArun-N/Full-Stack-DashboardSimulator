import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../service/authentication.service';
import { HttpClientService } from '../../../../service/http-client.service';
import {Credentials} from '../../../../models/Credentials';
import { NotificationService } from  '../../../../service/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email;
  password;
  credentials: Credentials;
  invalidLogin = false;
  submitted = false;

  constructor(private router: Router,public loginService:AuthenticationService, private httpClientService:HttpClientService, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }  

  /*checkUserLogin(){  
    if(this.loginService.authenticate(this.email, this.password)){
      this.router.navigate(['pages/dashboard']);
      this.invalidLogin = false;
      //error=>console.log(error));
    // this.credentials=new Credentials();
   }else{
     this.invalidLogin = true;
   }}*/

   checkUserLogin(){
    console.log('inside user login');
    this.credentials = { email:this.email, password : this.password};
    this.httpClientService.checkUserLogin(this.credentials).subscribe(
      result => {
      if(result.status==1){
        this.submitted=true;       
        this.router.navigate(['pages/dashboard']);        
      }    
      else if(result.status==-1) {
        this.notifyService.showError("Incorrect password", "Ellie Zoho");
      }
      else if(result.status==-2){
        this.notifyService.showError("Incorrect username. If you are a new user, please create new account", "Ellie Zoho");
      }
      
      });   
   }

    onSubmit()
   {
     this.checkUserLogin();
   } 

}
