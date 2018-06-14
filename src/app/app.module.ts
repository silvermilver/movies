import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.router';
import { MovieDetailReducer } from './reducers/movie-details.reducer';
import { MovieDetailEffects } from './effects/movieDetail.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({ movieDetails: MovieDetailReducer }),
    EffectsModule.forRoot([MovieDetailEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
