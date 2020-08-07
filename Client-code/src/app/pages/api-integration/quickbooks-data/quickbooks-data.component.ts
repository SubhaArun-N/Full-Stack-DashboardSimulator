import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import { HttpClientService } from '../../../service/http-client.service';
import {QuickBooksIntegration} from '../../../models/QuickBooksIntegration';
import {NbDialogService} from '@nebular/theme';
import { QuickbooksintegrationInformationComponent } from '../quickbooksintegration-information/quickbooksintegration-information.component';
import { NotificationService } from  '../../../service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-quickbooks-data',
  templateUrl: './quickbooks-data.component.html',
  styleUrls: ['./quickbooks-data.component.scss']
})
export class QuickbooksDataComponent implements OnInit {

  quickbooksIntegration: QuickBooksIntegration;
  client_id;
  client_secret;
  website_url;
  submitted = false;

  constructor(protected dialogRef: NbDialogRef<any>, private httpClientService:HttpClientService, private dialogService: NbDialogService,
              private router: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialogService.open(QuickbooksintegrationInformationComponent, { hasBackdrop: true, closeOnBackdropClick: false});
 }

  close() {
    this.dialogRef.close();
  }

  quickbooksApiIntegration(){
    this.quickbooksIntegration = { client_id : this.client_id, client_secret:this.client_secret, website_url:this.website_url};
    this.httpClientService.quickbooksApiIntegration(this.quickbooksIntegration).subscribe(
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
    this.quickbooksApiIntegration();
  }

}
