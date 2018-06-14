import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { UserSignInService } from '../core/services/user-signIn.service';
import { StorageService } from '../core/services/storage.service';
import { ProgressBarService } from '../core/services/progress-bar.service';
/**
 *
 * @export
 * @class LoginComponent
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  /**
   * Creates an instance of LoginComponent.
   * @param {UserSignInService} signInService
   * @param {StorageService} storageService
   * @param {Router} router
   * @param {MatSnackBar} snackBar
   *
   * @memberOf LoginComponent
   */
  constructor(
    private signInService: UserSignInService,
    private storageService: StorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private progressService: ProgressBarService
  ) { }
  /**
   *
   * @memberOf LoginComponent
   */
  onLoginHandler(event: Object) {
    this.progressService.showProgress(true);
    this.signInService.signIn(event).subscribe(response => {
      this.progressService.showProgress(false);
      if (response['length'] > 0) {
        this.openSnackBar('Logged In');
        this.storageService.setItem('isLoggedIn', true);
        this.router.navigate(['/movies', 0]);
      } else {
        this.openSnackBar('Invalid Username/Password');
      }
    });
  }
  /**
   *
   * @param {string} message
   *
   * @memberOf LoginComponent
   */
  openSnackBar(message: string) {
    this.snackBar.open(message, 'CLOSE', {
      duration: 2000,
    });
  }
}
