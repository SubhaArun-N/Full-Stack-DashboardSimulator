import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-quickbooksintegration-information',
  templateUrl: './quickbooksintegration-information.component.html',
  styleUrls: ['./quickbooksintegration-information.component.scss']
})
export class QuickbooksintegrationInformationComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
