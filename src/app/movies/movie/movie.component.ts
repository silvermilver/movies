import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Output() movieId = new EventEmitter<String>();
  private _movie: Object;

  @Input()
  set movie(movie: Object) {
    this._movie = movie;
  }

  get movie(): Object { return this._movie; }
  constructor() { }

  ngOnInit() {
  }

  onMovieCardClick() {
    this.movieId.emit(this.movie['id']);
  }
}
