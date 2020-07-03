import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbIconModule, NbMenuItem, NbSidebarService } from '@nebular/theme';
import { NbMediaBreakpointsService, NbMenuService, NbThemeService } from '@nebular/theme';

import { UserData } from '../@core/data/users';
import { LayoutService } from '../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { RippleService } from '../@core/utils/ripple.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  public readonly materialTheme$: Observable<boolean>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private readonly sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
    icon: 'home-outline',
    link: '/home/dashboard',
    pathMatch: 'full'
    },
    {
      title: 'Admin Controls',
      icon: 'keypad-outline',
    },
    {
      title: 'Logs',
      icon: 'list-outline',
    },
    {
      title: 'Phone Settings',
      icon: 'phone-outline',
    },
    {
      title: 'CRM',
      icon: 'bar-chart-outline',
    },
    {
    title: 'Api Integration',
    icon: 'grid-outline',
    link: 'home/api-integration',
    pathMatch: 'full'
  },
  {
    title: 'Live Chat',
    icon: 'email-outline',    
  },
  {
  title: 'Phone Ellie',
  icon: 'phone-outline', 
},
{
  title: 'Phone Logs',
  icon: 'menu-outline',  
},
];

toggleSidebar(): boolean {
  this.sidebarService.toggle();
  return false;
}

onLogout(){
  this.router.navigate(['user/logout']);
}
}
