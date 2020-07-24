import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }



  authenticate(newUserLogin: any):Observable<any>
  {
    const httpOptions = 
    {
      headers: new HttpHeaders(
      { 
         'Authorization': 'Your Token',
         'Content-Type': 'application/json'
      })
    }
  
    //const body=JSON.stringify(newUserDetail);
    return this.httpClient.post('http://localhost:3000/auth/signIn',newUserLogin,httpOptions);  
  }

/*  authenticate(username, password)
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
}*/


}
