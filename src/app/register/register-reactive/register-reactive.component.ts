import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 *
 * @export
 * @class RegisterReactiveComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-registerreactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.scss']
})
export class RegisterReactiveComponent implements OnInit {

  @Output() register = new EventEmitter<Object>();
  public registerForm: FormGroup;
  /**
   *
   * @readonly
   *
   * @memberOf RegisterReactiveComponent
   */
  get username() {
    return this.registerForm.get('username');
  }
  /**
   *
   * @readonly
   *
   * @memberOf RegisterReactiveComponent
   */
  get email() {
    return this.registerForm.get('email');
  }
  /**
   *
   * @readonly
   *
   * @memberOf RegisterReactiveComponent
   */
  get password() {
    return this.registerForm.get('password');
  }
  /**
   *
   * @readonly
   *
   * @memberOf RegisterReactiveComponent
   */
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  /**
   * Creates an instance of RegisterReactiveComponent.
   *
   * @memberOf RegisterReactiveComponent
   */
  constructor() { }
  /**
   *
   * @memberOf RegisterReactiveComponent
   */
  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  /**
   *
   *
   * @memberOf RegisterReactiveComponent
   */
  onRegister() {
    if (this.registerForm.valid) {
      const regObj: Object = { ...this.registerForm.value };  // we don't want to mutate the registerForm value
      delete regObj['confirmPassword'];
      regObj['username'] = regObj['username'].trim();
      regObj['email'] = regObj['email'].trim();
      regObj['password'] = regObj['password'].trim();
      this.register.emit(regObj);
    }
  }

  eventHandler(keyCode: Number) {
    if (keyCode === 32) {
      return false;
    }
  }
}
