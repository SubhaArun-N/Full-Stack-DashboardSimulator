import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../service/authentication.service';
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

  constructor(private router: Router,public authService:AuthenticationService, private notifyService: NotificationService) { }

  ngOnInit() {
    /*let username = localStorage.getItem('username');
    console.log(!(username === null));
    if(!(username === null)){
      this.router.navigate(['pages/dashboard']);
    }else{
       localStorage.clear();

    }*/

    if(this.authService.isUserLoggedIn()){
      this.router.navigate(['pages/dashboard']);
    }
    else{
      localStorage.clear();
    }
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
    this.authService.authenticate(this.credentials).subscribe(
      result => {
      if(result.status==1){
        this.submitted=true;       
        this.router.navigate(['pages/dashboard']); 
        localStorage.setItem('token', result.token);          
        localStorage.setItem('isLoggedIn', 'true' );
        localStorage.setItem('username', this.email); 
        localStorage.setItem('firstname', result.firstname);
        localStorage.setItem('user_id', result.user_id);     
        localStorage.setItem('expiresAt', ((new Date()).getTime() + (3 * 60 * 60 * 1000)).toString() );     
        
      }    
      else if(result.status==-1) {
        this.notifyService.showError("Invalid password", "Ellie Zoho");
      }
      else if(result.status==-2){
        this.notifyService.showError("Invalid username. If you are a new user, please create a new account", "Ellie Zoho");
      }
            
      });   

   }

    onSubmit()
   {
     this.checkUserLogin();
   } 

}
