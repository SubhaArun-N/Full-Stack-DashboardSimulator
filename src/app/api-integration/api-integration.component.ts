import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {ZohocardMainComponent} from '../zohocard-main/zohocard-main.component';
import {AmazoncardMainComponent} from '../amazoncard-main/amazoncard-main.component';


@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dialogService: NbDialogService) { }

  ngOnInit(): void {
    
  }

  
  
}
