import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const LoginRouter = RouterModule.forChild(LOGIN_ROUTES);
