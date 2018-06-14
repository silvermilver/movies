/// <reference types="Cypress" />

context('Movie Page Test', () => {

  describe('Check Movies are displayed', () => {
    it('Login => Select Genre => Enter Genre => Search Genre => Click Movie', () => {
      cy.wait(500);
      // LOGIN
      cy.visit('http://localhost:4200/login');
      cy.get('#mat-input-0').type('Shubhendu');
      cy.get('#mat-input-1').type('123456789');
      cy.get('.mat-raised-button').click();
      cy.url().should('include', '/movies/0');

      // Select Genre
      cy.get('.mat-slide-toggle-bar').click();

      // Enter Genre
      cy.get('#mat-input-2')
        .type('Adventure')
        .should('have.value', 'Adventure');

      // Click Search
      cy.get('.mat-raised-button').click();

      // Click Movie
      cy.wait(2000);
      cy.get(':nth-child(2) > .cardStyle').click();
      cy.url().should('include', '/movies/122');
      cy.wait(2000);
    });
  });
});