import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { MovieDetailService } from '../core/services/movie-detail.service';
import * as movieDetailActions from '../actions/movie-details.actions';

@Injectable()
export class MovieDetailEffects {
    constructor(private movieDetailService: MovieDetailService, private action$: Actions) { }

    @Effect() loadMovieDescription$ = this.action$
        .ofType(movieDetailActions.LOAD_MOVIE_DESCRIPTION)
        .switchMap((action) => this.movieDetailService.getMovieDetail(action['payload'])
            .map((movieDetail) => (new movieDetailActions.LoadMovieDescriptionSuccessAction(movieDetail)))
        );
}
