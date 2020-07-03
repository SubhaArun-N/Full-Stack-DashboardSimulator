import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';


@Component({
  selector: 'app-zohocrm-card',
  templateUrl: './zohocrm-card.component.html',
  styleUrls: ['./zohocrm-card.component.scss']
})
export class ZohocrmCardComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  
    

}
