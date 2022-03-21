// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing-Library Commands
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('dataCy', (selector) => {
  cy.get(`[data-cy="${selector}"]`)
})

Cypress.Commands.add('signUp', (user) => {
  cy.findByPlaceholderText(/name/i).type(user.name)
  cy.findByPlaceholderText(/email/i).type(user.email)
  cy.findByPlaceholderText(/password/i).type(user.password)
  cy.findByRole('button', { name: /register/i }).click()
})

Cypress.Commands.add('signIn', (email = 'e2e@tgl.com.br', password = '123456') => {
  cy.findByPlaceholderText(/email/i).type(email)
  cy.findByPlaceholderText(/password/i).type(password)
  cy.findByRole('button', { name: /log in/i }).click()
})

Cypress.Commands.add('shouldRenderBetsGameNames', (regex) => {
  cy.dataCy('bets').within(() => {
    cy.dataCy('game-card').within(() => {
      cy.dataCy('game-name').findAllByText(regex).should('exist')
    })
  })
})

Cypress.Commands.add('shouldCloseToastify', () => {
  cy.get('.Toastify').within(() => {
    cy.findByLabelText(/close/i).click()
  }).should('exist')
})

Cypress.Commands.add('completeGameAddToCartByIndex', (index) => {
  cy.dataCy('game-button').should('exist').eq(index).click()
  cy.findByRole('button', { name: /complete game/i }).should('exist').click()
  cy.findByRole('button', { name: /add to cart/i }).should('exist').click()
})
