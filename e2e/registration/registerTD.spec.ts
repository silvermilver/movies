import {RegistrationPage} from './registrationPage';
import {browser} from "protractor";

describe('validation for register page', () => {
  let using = require('jasmine-data-provider');
  let registrationPage = new RegistrationPage();

  beforeEach(() => {
    registrationPage.get();
  })

  it('should have all elements on the page', function () {
    registrationPage.allElementsIsPresent();
  })

  it('submit button should be disabled when all inputs are empty', function () {
    expect(registrationPage.getSubmitButton().getAttribute('disabled')).toEqual('true');
  })

  it('submit button should be active when all input data is valid', function () {
    registrationPage.setUserNameTD('userName');
    registrationPage.setEmailTD('email@emal.com');
    registrationPage.setPasswordTD('123');
    registrationPage.setConfirmPasswordTD('123');
    expect(registrationPage.getSubmitButton().getAttribute('disabled')).toEqual(null);
  })

  it('do not possible do register existing user', function () {
    let data = require('../../server/db.json')
    registrationPage.setUserNameTD(data.users[0].username);
    registrationPage.setEmailTD(data.users[0].email);
    registrationPage.setPasswordTD(data.users[0].password);
    registrationPage.setConfirmPasswordTD(data.users[0].password);
    registrationPage.submit();
    registrationPage.allElementsIsPresent();
  })

  const userNameDataProvider = [
    {description: 'user name should be more than 4 characters', userName: '1234', expected: true},
    {description: 'user name should be more than 4 characters without spaces', userName: ' 1234 ', expected: true},
  ];

  using(userNameDataProvider, function (data) {
    it(data.description, function () {
      registrationPage.setUserNameTD(data.userName);
      expect(registrationPage.getUserNameErrorTD().isDisplayed()).toEqual(data.expected);
    });
  })

});
