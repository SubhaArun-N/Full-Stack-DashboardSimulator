import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AuthenticationService } from '../../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  firstname = localStorage.getItem("firstname");
  id = localStorage.getItem("user_id")

  userMenu = [ {title: 'Forgot password'}, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private authenticationService: AuthenticationService,
              private router: Router) {
                this.someFunction()
                
  }


  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
      
  }

/*
*SignOut() function removes the stored access token in session storage
*/
someFunction(){
  this.menuService.onItemClick()
  .subscribe((event) => {
    this.onContextItemSelection(event.item.title);
  });
}



  onContextItemSelection(title)
  {
    if (title == "Log out")
    {
      this.authenticationService.signOut();
      this.router.navigate(['/auth/signIn']);
      
    }else if(title == "Forgot password"){
      this.router.navigate(['pages/forgotpassword']);
    }
  }

  /*signOut(){
    this.authenticationService.signOut();
    this.router.navigate(['auth/signIn']);
  }  */
  
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  
    changeTheme(themeName: string) {
      this.themeService.changeTheme(themeName);
    }
  
    toggleSidebar(): boolean {
      this.sidebarService.toggle(true, 'menu-sidebar');
      this.layoutService.changeLayoutSize();
  
      return false;
    }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
