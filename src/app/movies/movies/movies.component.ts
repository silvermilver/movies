import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import GetMovieList from '../../core/services/getMovieList.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public titleList: Array<String> = [];
  public genreList: Array<String> = [];
  public movieList: Array<Object> = [];
  public movieId: Number;
  private _route: any;
  constructor(private getMovieService: GetMovieList, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieList = [];
    this.titleList = this.getMovieService.getAllTitles();
    this.genreList = this.getMovieService.getAllGenres();
    this._route = this.route.params.subscribe(params => {
      this.movieId = +params['id'];
    });
  }

  onSearchMovies(searchObj: Object) {
    this.movieList = [];
    let mList: Array<Object> = [];
    mList = this.getMovieService.getAllMovies();
    if (searchObj['title']) {
      const mTitle = searchObj['title'];
      for (let index = 0; index < mList.length; index++) {
        if (mList[index]['title'] === mTitle) {
          this.movieList.push(mList[index]);
          break;
        }
      }
    } else {
      const mGenre = searchObj['genre'];
      mList.forEach(mObj => {
        if (mObj['genres'].indexOf(mGenre) !== -1) {
          this.movieList.push(mObj);
        }
      });
    }
    this.router.navigate(['/movies', 0]);
  }

  onMovieCardClick(id: String) {
    this.router.navigate(['/movies', id]);
  }
}
