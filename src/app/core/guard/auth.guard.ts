import { Route, Router, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';

import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private storageService: StorageService,
  ) { }
  /**
   *
   * @param {Route} route
   * @returns
   *
   * @memberOf AuthGuard
   */
  canLoad(route: Route) {
    if (this.storageService.getItem('isLoggedIn') !== 'false') {
      return true;
    } else {
      this.router.navigate(['/'], {});
      return false;
    }
  }
}
