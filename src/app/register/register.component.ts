import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistrationService } from '../core/services/user-registration.service';
import { ProgressBarService } from '../core/services/progress-bar.service';
import { MatSnackBar } from '@angular/material';
/**
 *
 * @export
 * @class RegisterComponent
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  /**
   * Creates an instance of RegisterComponent.
   * @param {UserRegistrationService} userRegistrationService
   * @param {Router} router
   *
   * @memberOf RegisterComponent
   */
  constructor(
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private progressService: ProgressBarService,
    private snackBar: MatSnackBar,
  ) { }
  /**
   *
   * @param {Object} event
   *
   * @memberOf RegisterComponent
   */
  onRegisterHandler(event: Object) {
    this.progressService.showProgress(true);
    this.userRegistrationService.getAllUsers().subscribe(response => {
      this.progressService.showProgress(false);
      const resList: any = response;
      let isRepeat: Boolean = false;
      resList.forEach(element => {
        if (element['email'] === event['email']) {
          isRepeat = true;
        }
      });
      if (!isRepeat) {
        this.progressService.showProgress(true);
        this.userRegistrationService.register(event).subscribe(res => {
          this.progressService.showProgress(false);
          this.router.navigate(['/login']);
        });
      } else {
        this.openSnackBar('Email Already Exist');
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'CLOSE', {
      duration: 2000,
    });
  }
}
