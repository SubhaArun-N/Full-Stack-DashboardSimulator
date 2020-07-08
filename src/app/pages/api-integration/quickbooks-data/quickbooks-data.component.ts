import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-quickbooks-data',
  templateUrl: './quickbooks-data.component.html',
  styleUrls: ['./quickbooks-data.component.scss']
})
export class QuickbooksDataComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
