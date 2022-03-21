// load type definitions that come with Cypress module
/// <reference types="cypress" />

type User = {
  name: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
      * Custom command to get element by data-cy
      * @example cy.dataCy(selector)
    */
    dataCy(selector: string): Chainable<Element>

    /**
      * Custom command to sign up a user
      * @example cy.signUp(user)
    */
    signUp(user: User): Chainable<Element>

    /**
      * Custom command to sign up a user
      * @example cy.signIn(email, passoword)
    */
    signIn(email?: string, passoword?: string): Chainable<Element>

     /**
      * Custom command to sign up a user
      * @example cy.signIn(email, passoword)
    */
    shouldRenderBetsGameNames(name: RegExp): Chainable<Element>
  }
}
