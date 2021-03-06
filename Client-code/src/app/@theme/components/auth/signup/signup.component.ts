
import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../../../models/UserDetails';
import { HttpClientService } from  '../../../../service/http-client.service';
import { NotificationService } from  '../../../../service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  username;
  email;
  phone;
  password;

  userDetails: UserDetails;
  submitted = false;

  constructor( private httpClientService:HttpClientService,  private router: Router, private notifyService: NotificationService ) { }

  ngOnInit(): void {
  }

  
  showpwd(){
    // console.log("Inside show password")
    var input=document.getElementById("password")
    // var icon=document.getElementById("lock-icon").className
    // console.log("Input tag..",input['type'])
    // console.log("TYPE..",typeof(input))
    if (input['type'] == "password") {
      input['type'] = "text";
      document.getElementById("lock-icon").className="fa fa-unlock"
  } else {
      input['type'] = "password";
      document.getElementById("lock-icon").className="fa fa-lock"
  }
  }

  saveUserDetails(){
    console.log('inside save user details');
    this.userDetails = { username : this.username, email:this.email, phone:this.phone, password : this.password};
    this.httpClientService.saveUserDetails(this.userDetails).subscribe(
      result => {
      if(result.status==1){
        this.submitted=true;
        this.notifyService.showSuccess("You are registered!", "Ellie Zoho");
        this.router.navigate(['/auth/signIn']);
      }     
      
      });      
  }

  onSubmit()
  {
    this.saveUserDetails();
  }

}