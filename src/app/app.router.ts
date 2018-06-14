import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './core/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './core/guard/auth.guard';

const APP_ROUTES: Routes = [
  {
    path: 'movies/:id',
    loadChildren: 'app/movies/movies.module#MoviesModule',
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/register/register.module#RegisterModule',
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
