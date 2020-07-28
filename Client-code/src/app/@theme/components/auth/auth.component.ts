import { Component } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbAuthComponent } from '@nebular/auth';

@Component({
    selector: 'auth',
    styleUrls: ['./auth.component.scss'],
    template: `
    <nb-layout>
      <nb-layout-column class="auth-content">
        
            
              <router-outlet></router-outlet>
            
         
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthComponent extends NbAuthComponent {
}