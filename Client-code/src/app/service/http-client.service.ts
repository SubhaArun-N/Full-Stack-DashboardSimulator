import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

zohoApiIntegration(newZohoIntegtaion:any):Observable<any>
{
  const httpOptions = {
    headers: new HttpHeaders(
    { 
       'Authorization': 'Your Token',
       'Content-Type': 'application/json'
    })
}

//const body=JSON.stringify(newZohoIntegtaion);
return this.httpClient.post('http://localhost:3000/pages/api-integration',newZohoIntegtaion,httpOptions);    
}

saveUserDetails(newUserDetail:any):Observable<any>
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
  return this.httpClient.post('http://localhost:3000/auth/signUp',newUserDetail,httpOptions);    
}



}
