import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmPassword(){
    this.router.navigate(['auth/signin']);
  }

}
