/// <reference types="Cypress" />

context('Login Page Test', () => {

  beforeEach(() => {
    cy.wait(500);
    cy.visit('http://localhost:4200/login');
  });

  describe('Check Valid Login', () => {
    it('Check Valid Login', () => {
      cy.get('#mat-input-0')
        .type('Shubhendu')
        .should('have.value', 'Shubhendu');

      cy.get('#mat-input-1')
        .type('123456789')
        .should('have.value', '123456789');

      cy.get('.mat-raised-button')
        .click();

      cy.url().should('include', '/movies/0');
    });
  });
});