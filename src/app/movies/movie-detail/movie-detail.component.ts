import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AppState } from '../../models/app-state';
import * as movieDetailActions from '../../actions/movie-details.actions';
import { ProgressBarService } from '../../core/services/progress-bar.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  @Input() movieId: Number;
  public movie$: Observable<any>;
  private movieSubscription: Subscription;
  public movie: Object;
  public isMovieDescLoading: Boolean = true;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.movie = {};
    this.movie$ = this.store.select(state => state.movieDetails);
    this.getMovieDetails();
    this.movieSubscription = this.movie$.subscribe(response => {
      this.isMovieDescLoading = false;
      this.movie = response;
    });
  }

  getMovieDetails() {
    this.movie = {};
    this.isMovieDescLoading = true;
    this.store.dispatch(new movieDetailActions.LoadMovieDescriptionAction(this.movieId));
  }

  ngOnDestroy(): void {
    this.isMovieDescLoading = true;
    this.movie = {};
    this.movieSubscription.unsubscribe();
  }
}
