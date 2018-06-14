import {browser, by, element} from 'protractor';

export class RegistrationPage {
  private submitButton = element(by.buttonText('Register'));
  private emailExistError = element(by.cssContainingText('div', 'Email Already Exist'));

  //for Template Driven version
  private userNameTD = element(by.name('username'));
  private emailTD = element(by.name('email'));
  private passwordTD = element(by.name('password'));
  private confirmPasswordTD = element(by.name('confirmPassword'));

  private userNameErrorTD = element(by.cssContainingText('div', 'Username should be between 5 to 10 characters.'));

  //for Reactive version
  private userNameR = element(by.css("input[placeholder=Username]"));
  private emailR = element(by.css("input[placeholder=Email]"));
  private passwordR = element(by.css("input[placeholder=Password]"));
  private confirmPasswordR = element(by.css("input[placeholder=Confirm Password]"));

  get() {
    browser.get('/register');
  }

  getSubmitButton() {
    return this.submitButton;
  }

  getEmailExistError() {
    return this.emailExistError;
  }

  submit() {
    return this.submitButton.click();
  }

  //for Template Driven version ------------------------------
  getUserNameTD() {
    return this.userNameTD;
  }

  getEmailTD() {
    return this.emailTD;
  }

  getPasswordTD() {
    return this.passwordTD;
  }

  getConfirmPasswordTD() {
    return this.confirmPasswordTD;
  }

  getUserNameErrorTD() {
    return this.userNameErrorTD;
  }

  setUserNameTD(userName: string) {
    this.userNameTD.sendKeys(userName);
  }

  setEmailTD(email: string) {
    this.emailTD.sendKeys(email);
  }

  setPasswordTD(password: string) {
    this.passwordTD.sendKeys(password);
  }

  setConfirmPasswordTD(confirmPassword: string) {
    this.confirmPasswordTD.sendKeys(confirmPassword);
  }

  //for Reactive version ------------------------------------
  getUserNameR() {
    return this.userNameR;
  }

  getEmailR() {
    return this.emailR;
  }

  getPasswordR() {
    return this.passwordR;
  }

  getConfirmPasswordR() {
    return this.confirmPasswordR;
  }

  setUserNameR(userName: string) {
    this.userNameR.sendKeys(userName);
  }

  setEmailR(email: string) {
    this.emailR.sendKeys(email);
  }

  setPasswordR(password: string) {
    this.passwordR.sendKeys(password);
  }

  setConfirmPasswordR(confirmPassword: string) {
    this.confirmPasswordR.sendKeys(confirmPassword);
  }


  allElementsIsPresent() {
    expect(this.submit().isPresent).toBeTruthy();

    //for Template Driven version
    expect(this.getUserNameTD().isPresent).toBeTruthy();
    expect(this.getEmailTD().isPresent).toBeTruthy();
    expect(this.getPasswordTD().isPresent).toBeTruthy();
    expect(this.getConfirmPasswordTD().isPresent).toBeTruthy();

    //for Reactive version
    expect(this.getUserNameR().isPresent).toBeTruthy();
    expect(this.getEmailR().isPresent).toBeTruthy();
    expect(this.getPasswordR().isPresent).toBeTruthy();
    expect(this.getConfirmPasswordR().isPresent).toBeTruthy();
  }

  getTitle() {
    return browser.getTitle();
  }
}
