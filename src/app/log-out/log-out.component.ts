import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService, private router: Router) { }

  ngOnInit() {
  this.authenticationService.logOut();
  this.router.navigate(['']);
  }
}