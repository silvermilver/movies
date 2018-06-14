// https://angular.io/guide/styleguide#core-feature-module

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { httpInterceptorProviders } from '../http-interceptors';
import { AuthService } from './services/auth.service';
import { UserRegistrationService } from './services/user-registration.service';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './not-found.component';
import { UserSignInService } from './services/user-signIn.service';
import { StorageService } from './services/storage.service';
import { AuthGuard } from './guard/auth.guard';
import { MoviesService } from './services/movies.service';
import { ProgressBarService } from './services/progress-bar.service';
import GetMovieList from './services/getMovieList.service';
import { MovieDetailService } from './services/movie-detail.service';

/**
 *
 *
 * @export
 * @class CoreModule
 */
@NgModule({
  imports: [
    BrowserAnimationsModule ,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
  ],
  declarations: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  providers: [
    ProgressBarService,
    AuthService,
    httpInterceptorProviders,
    UserRegistrationService,
    UserSignInService,
    StorageService,
    MoviesService,
    AuthGuard,
    GetMovieList,
    MovieDetailService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it only once in the AppModule.');
    }
  }
}
