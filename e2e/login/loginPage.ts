import {browser, by, element} from 'protractor';

export class LoginPage {
  private login = element(by.name('username'));
  private password = element(by.name('password'));
  private submitButton = element(by.buttonText('Submit'));

  get() {
    browser.get('/login');
  };

  getLogin() {
    return this.login;
  }

  setLogin(login: string) {
    this.login.sendKeys(login);
  }

  setPassword(password: string) {
    this.password.sendKeys(password);
  }

  submit() {
    return this.submitButton.click();
  }

  getTitle() {
    return browser.getTitle();
  }

  signIn(login: string, password: string) {
    this.setLogin(login);
    this.setPassword(password);
    this.submit();
    browser.waitForAngular();
  }
}
