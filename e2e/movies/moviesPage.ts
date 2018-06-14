import {browser, by, element} from 'protractor';

export class MoviesPage {
  private moviesList = element(by.css('app-movies[class=ng-star-inserted]'));

  get() {
    browser.get('/movies');
  }

  getMoviesList() {
    return this.moviesList;
  }

  getTitle() {
    return browser.getTitle();
  }
}
