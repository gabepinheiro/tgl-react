// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
      * Custom command to visit Google page
      * @example cy.google()
    */
    google(): Chainable<Window>
  }
}
