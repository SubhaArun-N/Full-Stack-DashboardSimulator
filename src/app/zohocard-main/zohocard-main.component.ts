import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import { ZohocrmCardComponent } from '../zohocrm-card/zohocrm-card.component';


@Component({
  selector: 'app-zohocard-main',
  templateUrl: './zohocard-main.component.html',
  styleUrls: ['./zohocard-main.component.scss']
})
export class ZohocardMainComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialogService.open(ZohocrmCardComponent, { hasBackdrop: true, closeOnBackdropClick: false});
 }

}
