import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

 

  authenticate(Credentials: any):Observable<any>
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
    return this.httpClient.post('http://localhost:3000/auth/signIn',Credentials,httpOptions)
  }


  signOut() {
   console.log("removing access token...");
   
   localStorage.removeItem('token');
   localStorage.removeItem('expiresIn');  
   localStorage.setItem('isLoggedIn', 'false');

   console.log("local storage");
   for (var i = 0; i < localStorage.length; i++)   {
       console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
   } 
  }

/*
isUserLoggedIn()
    {
      let user=sessionStorage.getItem('username')
      console.log(!(user===null))
      return !(user===null)
    }
    */
}
