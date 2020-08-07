import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import { HttpClientService } from '../../../service/http-client.service';
import {ZohoIntegration} from '../../../models/ZohoIntegration';
import {NbDialogService} from '@nebular/theme';
import { ZohointegrationInformationComponent } from '../zohointegration-information/zohointegration-information.component';
import { NotificationService } from  '../../../service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-zohocrm-data',
  templateUrl: './zohocrm-data.component.html',
  styleUrls: ['./zohocrm-data.component.scss'],
})
export class ZohocrmDataComponent implements OnInit {

  zohoIntegration: ZohoIntegration;
  submitted = false;  
  client_id;
  client_secret;
  website_url;
  grant_token;

  constructor(protected dialogRef: NbDialogRef<any>, private httpClientService:HttpClientService, private dialogService: NbDialogService,
    private router: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

 
  
    /*getDataFromAPI(){
      this.httpClient.getData().subscribe((res) => {
        console.log("response received", res)
      }, (error) =>{
        console.log('Error is', error);
      }
      )
    }*/

    onClick(){
      this.dialogService.open(ZohointegrationInformationComponent, { hasBackdrop: true, closeOnBackdropClick: false});
   }

    zohoApiIntegration(){
      this.zohoIntegration = { client_id : this.client_id, client_secret:this.client_secret, website_url:this.website_url, grant_token : this.grant_token};
      this.httpClientService.zohoApiIntegration(this.zohoIntegration).subscribe(
        result => {
          if(result.status==1){
            this.submitted=true;
            this.notifyService.showSuccess("Data entered successfully!", "Ellie Zoho");
            this.close();
          }     
          
          });   
    }

    onSubmit()
    {
      this.zohoApiIntegration();
    }

}
