import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { moviesRouter } from './movies.router';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
    imports: [SharedModule, moviesRouter],
    declarations: [MoviesComponent, MovieListComponent, MovieComponent, MovieDetailComponent]
})

export class MoviesModule { }
