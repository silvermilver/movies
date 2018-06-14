import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

const REGISTER_ROUTES: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

export const registerRouter = RouterModule.forChild(REGISTER_ROUTES);
