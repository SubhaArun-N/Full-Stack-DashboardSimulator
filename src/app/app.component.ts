import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zoho-crm-client';

  username:string='';
   r_username:string='';

  constructor(public loginService:AuthenticationService){}

  ngOnInit(){
    this.username=this.loginService.getRoleName();    
      }
}
