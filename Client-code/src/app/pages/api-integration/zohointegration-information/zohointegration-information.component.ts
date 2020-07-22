import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-zohointegration-information',
  templateUrl: './zohointegration-information.component.html',
  styleUrls: ['./zohointegration-information.component.scss']
})
export class ZohointegrationInformationComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
