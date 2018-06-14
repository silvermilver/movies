import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() movieId = new EventEmitter<String>();
  @Input() movieList: Array<Object> = [];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

  onMovieCardClick(id: String) {
    this.movieId.emit(id);
  }
}
