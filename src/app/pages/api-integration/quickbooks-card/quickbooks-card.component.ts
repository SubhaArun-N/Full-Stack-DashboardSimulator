import { Component, OnInit } from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import { QuickbooksDataComponent } from '../quickbooks-data/quickbooks-data.component';

@Component({
  selector: 'app-quickbooks-card',
  templateUrl: './quickbooks-card.component.html',
  styleUrls: ['./quickbooks-card.component.scss']
})
export class QuickbooksCardComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialogService.open(QuickbooksDataComponent, { hasBackdrop: true, closeOnBackdropClick: false});
 }

}
