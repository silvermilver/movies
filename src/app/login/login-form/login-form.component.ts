import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
/**
 *
 * @export
 * @class LoginFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  @Output() login = new EventEmitter<Object>();
  public loginModel: Object = {};
  /**
   * Creates an instance of LoginFormComponent.
   *
   * @memberOf LoginFormComponent
   */
  constructor() { }
  /**
   *
   * @memberOf LoginFormComponent
   */
  ngOnInit() {
    this.loginModel = {
      username: '',
      password: ''
    };
  }
  /**
   *
   * @memberOf LoginFormComponent
   */
  onLogin() {
    if (this.loginForm.valid) {
      const loginObj: Object = { ...this.loginForm.value };
      loginObj['username'] = loginObj['username'].trim();
      loginObj['password'] = loginObj['password'].trim();
      this.login.emit(loginObj);
    }
  }

  eventHandler(keyCode: Number) {
    if (keyCode === 32) {
      return false;
    }
  }

}
