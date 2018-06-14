import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConstant } from '../../app.constant';

@Injectable()
export class MoviesService {
  private movieList: any = [];

  constructor(private http: HttpClient) {
    this.fetchMovies().subscribe(response => {
      this.movieList = response;
    });
  }

  private fetchMovies(): Observable<Response> {
    return this.http
      .get(AppConstant.url + 'movies')
      .map((response: Response) => response);
  }

  public getAllMovies(): Array<Object> {
    if (this.movieList.length === 0) {
      this.fetchMovies().subscribe(response => {
        this.movieList = response;
        return this.movieList;
      });
    } else {
      return this.movieList;
    }
  }
}
