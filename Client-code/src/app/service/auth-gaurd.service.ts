import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router, private authService: AuthenticationService) { }

  canActivate(){
    
    if(this.authService.isUserLoggedIn()){ 
      console.log("logged in....inside Auth guard");     
        return true;
      }
    else{
      console.log("logged out....routing to signin page"); 
      localStorage.clear(); 
      this.router.navigate(['/auth/signIn']);
      return false;
    }
  }
}
