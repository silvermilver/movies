import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConstant } from '../../app.constant';

@Injectable()
export class UserSignInService {
  /**
   * Creates an instance of UserSignInService.
   * @param {HttpClient} http
   *
   * @memberOf UserSignInService
   */
  constructor(private http: HttpClient) {
  }
  /**
   *
   * @param {Object} body
   *
   * @memberOf UserRegistrationService
   */
  public signIn(body: Object): Observable<Response> {
    return this.http
      .get(AppConstant.url + 'users/?username=' + body['username'] + '&password=' + body['password'])
      .map((response: Response) => response);
  }
}
