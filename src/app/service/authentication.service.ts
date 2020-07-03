import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password)
    {
      if(username ==="subha" && password ==="password"){
        sessionStorage.setItem('username',"user")        
             return true;
      }else
      {
        return false;
      }
    }

  isUserLoggedIn()
      {
        let user=sessionStorage.getItem('username')
        console.log(!(user===null))
        return !(user===null)
      }

  logOut()
      {
        sessionStorage.removeItem('username')
      }
  getRoleName()
  {
    if(this.isUserLoggedIn()){
      return sessionStorage.getItem('role')
    }
  }
}
