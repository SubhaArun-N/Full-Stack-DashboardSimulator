import { Component, OnInit } from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import { ZohocrmDataComponent } from '../zohocrm-data/zohocrm-data.component';

@Component({
  selector: 'app-zoho-card',
  templateUrl: './zoho-card.component.html',
  styleUrls: ['./zoho-card.component.scss']
})
export class ZohoCardComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialogService.open(ZohocrmDataComponent, { hasBackdrop: true, closeOnBackdropClick: false});
 }

}
