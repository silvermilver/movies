import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConstant } from '../../app.constant';

@Injectable()
export class UserRegistrationService {
  /**
   * Creates an instance of UserRegistrationService.
   * @param {HttpClient} http
   *
   * @memberOf UserRegistrationService
   */
  constructor(private http: HttpClient) {
  }
  /**
   *
   * @param {Object} body
   *
   * @memberOf UserRegistrationService
   */
  public register(body: Object): Observable<Response> {
    return this.http
      .post(AppConstant.url + 'users', body)
      .map((response: Response) => response);
  }

  public getAllUsers(): Observable<Response> {
    return this.http
      .get(AppConstant.url + 'users')
      .map((response: Response) => response);
  }
}
