import { Injectable } from '@angular/core';

import { MoviesService } from './movies.service';

@Injectable()
export default class GetMovieList {
  private titleList: Array<String> = [];
  private genreList: Array<String> = [];

  constructor(private movieService: MoviesService) {
    this.fetchTitles();
    this.fetchGenres();
  }

  private fetchTitles(): void {
    this.titleList = this.movieService.getAllMovies().map(data => data['title']);
  }

  private fetchGenres(): void {
    this.movieService.getAllMovies().forEach(movieObj => {
      movieObj['genres'].forEach(genre => {
        if (this.genreList.indexOf(genre) === -1) {
          this.genreList.push(genre);
        }
      });
    });
  }

  public getAllTitles(): Array<String> {
    if (this.titleList.length === 0) {
      this.fetchTitles();
      return this.titleList;
    } else {
      return this.titleList;
    }
  }

  public getAllGenres(): Array<String> {
    if (this.genreList.length === 0) {
      this.fetchGenres();
      return this.genreList;
    } else {
      return this.genreList;
    }
  }

  public getAllMovies(): Array<Object> {
    return this.movieService.getAllMovies();
  }
}
