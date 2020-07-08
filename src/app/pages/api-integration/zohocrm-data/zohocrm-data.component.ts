import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import { HttpClientService } from '../../../service/http-client.service';
import {ZohoIntegration} from '../../../models/ZohoIntegration';
import {NbDialogService} from '@nebular/theme';
import { ZohointegrationInformationComponent } from '../zohointegration-information/zohointegration-information.component';

@Component({
  selector: 'ngx-zohocrm-data',
  templateUrl: './zohocrm-data.component.html',
  styleUrls: ['./zohocrm-data.component.scss']
})
export class ZohocrmDataComponent implements OnInit {

  zohoIntegration: ZohoIntegration=new ZohoIntegration();
  submitted = false;

  constructor(protected dialogRef: NbDialogRef<any>, private httpClientService:HttpClientService, private dialogService: NbDialogService) { }

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
      this.httpClientService.zohoApiIntegration(this.zohoIntegration).subscribe(
        data => {
        console.log(data);
        this.submitted=true;
        });
    }

    onSubmit()
    {
      this.zohoApiIntegration();
    }

}
