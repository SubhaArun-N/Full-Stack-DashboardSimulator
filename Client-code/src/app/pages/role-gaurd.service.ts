import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGaurdService implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate() {
    
    if(this.authService.isUserLoggedIn()){
      console.log("inside role guard");
      return true;
    }
    else{
      return false;
    }
  }
}
