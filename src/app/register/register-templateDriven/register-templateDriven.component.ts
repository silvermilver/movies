import { Component, ViewChild, Output, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
/**
 *
 * @export
 * @class RegisterTemplateDrivenComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-registertemplatedriven',
  templateUrl: './register-templateDriven.component.html',
  styleUrls: ['./register-templateDriven.component.scss']
})
export class RegisterTemplateDrivenComponent implements OnInit {

  @ViewChild('registerForm') registerForm: NgForm;
  @Output() register = new EventEmitter<Object>();
  public registerModel: Object = {};
  /**
   * Creates an instance of RegisterTemplateDrivenComponent.
   *
   * @memberOf RegisterTemplateDrivenComponent
   */
  constructor() { }
  /**
   *
   *
   * @memberOf RegisterTemplateDrivenComponent
   */
  ngOnInit() {
    this.registerModel = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  /**
   *
   *
   * @memberOf RegisterTemplateDrivenComponent
   */
  onRegister() {
    if (this.registerForm.valid) {
      const regObj: Object = { ...this.registerForm.value };
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
