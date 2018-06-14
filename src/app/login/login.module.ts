import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginRouter } from './login.router';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [SharedModule, LoginRouter],
  declarations: [LoginComponent, LoginFormComponent]
})

export class LoginModule { }
