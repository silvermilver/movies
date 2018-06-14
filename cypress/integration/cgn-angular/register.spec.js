/// <reference types="Cypress" />

context('Register Page Test', () => {
  describe('Check Template Driven form exist', function () {
    beforeEach(() => {
      cy.wait(500);
      cy.visit('http://localhost:4200/register');
    });
    it('Check Username and fill data', function () {
      // Get an input, type into it and verify that the value has been updated
      cy.get('#mat-input-0')
        .type('User001')
        .should('have.value', 'User001')
    })

    it('Check Email and fill data', function () {
      // Get an input, type into it and verify that the value has been updated
      cy.get('#mat-input-1')
        .type('shubhendu')
        .should('have.value', 'shubhendu')
    })

    it('Check password and fill data', function () {
      // Get an input, type into it and verify that the value has been updated
      cy.get('#mat-input-2')
        .type('123456789')
        .should('have.value', '123456789')
    })

    it('Check confirm Password and fill data', function () {
      // Get an input, type into it and verify that the value has been updated
      cy.get('#mat-input-3')
        .type('123456789')
        .should('have.value', '123456789')
    })
  });

  describe('Check Template Driven form inline errors', function () {
    beforeEach(() => {
      cy.visit('http://localhost:4200/register');
    });
    describe('Check Username', () => {
      it('Check error msg for username 4 characters', function () {
        cy.get('#mat-input-0')
          .type('user');
        cy.get('.alert')
          .should('contain', 'Username should be between 5 to 10 characters.');
      });

      it('check username for max 10 chars allowed', function () {
        cy.get('#mat-input-0')
          .type('user1234567')
          .should('have.value', 'user123456');
      });

      it('check space are trimmed', function () {
        cy.get('#mat-input-0')
          .type('  user  ')
          .should('have.value', 'user');
      });
    });

    describe('Check Email', () => {
      it('Check invalid email error msg 1', function () {
        cy.get('#mat-input-1')
          .type('user');
        cy.get('.alert')
          .should('contain', 'Email is not valid.');
      });

      it('Check invalid email error msg 2', function () {
        cy.get('#mat-input-1')
          .type('shubh@');
        cy.get('.alert')
          .should('contain', 'Email is not valid.');
      });
    });

    describe('Check Passwords', () => {
      it('Check Password and confirm password to be same', () => {
        cy.get('#mat-input-2')
          .type('123456789');
        cy.get('#mat-input-3')
          .type('12345678');
        cy.get('.alert')
          .should('contain', 'Password should be same');
      });
    });
  });

  describe('Check successful registration via template driven', () => {
    it('Check successful registration', () => {
      cy.visit('http://localhost:4200/register');

      cy.get('#mat-input-0').type('user001');
      cy.get('#mat-input-1').type('user@gmail.com');
      cy.get('#mat-input-2').type('123456789');
      cy.get('#mat-input-3').type('123456789');

      cy.get('form.ng-dirty > .mat-card-actions > .mat-raised-button').click();

      // Should be on a new URL which includes '/login'
      cy.url().should('include', '/login');
    });

    it('Check same user cannot register', () => {
      cy.visit('http://localhost:4200/register');

      cy.get('#mat-input-0').type('user001');
      cy.get('#mat-input-1').type('user@gmail.com');
      cy.get('#mat-input-2').type('123456789');
      cy.get('#mat-input-3').type('123456789');

      cy.get('form.ng-dirty > .mat-card-actions > .mat-raised-button').click();

      cy.get('.mat-simple-snackbar')
        .should('contain', 'Email Already Exist')
    });
  });
})