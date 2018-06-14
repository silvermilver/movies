import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { registerRouter } from './register.router';
import { RegisterComponent } from './register.component';
import { RegisterTemplateDrivenComponent } from './register-templateDriven/register-templateDriven.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule, registerRouter],
    declarations: [RegisterComponent, RegisterTemplateDrivenComponent, RegisterReactiveComponent]
})

export class RegisterModule { }
