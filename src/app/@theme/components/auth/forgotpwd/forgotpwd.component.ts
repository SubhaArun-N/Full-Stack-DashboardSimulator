import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this.router.navigate(['auth/confirmation']);
  }
}
