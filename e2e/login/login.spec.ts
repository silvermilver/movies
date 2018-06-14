import {LoginPage} from './loginPage';
import {MoviesPage} from '../movies/moviesPage';

describe('cgn-angular App', () => {
  let data = require('../../server/db.json')
  let loginPage = new LoginPage();
  let moviesPage = new MoviesPage();
  let login = data.users[0].username;
  let password = data.users[0].password;
  beforeEach(() => {
    loginPage.get();
  })

  it('should have a title', function () {
    expect(loginPage.getTitle()).toEqual('CgnAngular');
  })

  it('input valid login and password', function () {
    loginPage.signIn(login, password);
    expect(moviesPage.getMoviesList().isPresent).toBeTruthy();
  })

  it('input invalid login', function () {
    let invalidLogin = 'invalidLogin';
    loginPage.signIn(invalidLogin, password);
    expect(loginPage.getLogin().isPresent).toBeTruthy();
  })

  it('input invalid password', function () {
    let invalidPassword = 'invalidPassword';
    loginPage.signIn(login, invalidPassword);
    expect(loginPage.getLogin().isPresent).toBeTruthy();
  })
});
