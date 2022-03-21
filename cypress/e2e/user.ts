import { createUser } from '../support/generate'

describe('User', () => {
  it.skip('should sign up a user', () => {
    cy.visit('/register')
    cy.findByRole('heading', { name: /registration/i }).should('exist')

    const user = createUser()
    cy.signUp(user)

    cy.findByText(/registro realizado com sucesso!/i).should('exist')
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/authentication`)
  })

  it('should sign in a user', () => {
    cy.visit('/authentication')
    cy.findByRole('heading', { name: /authentication/i }).should('exist')

    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/cypress/i).should('exist')
  })

  it('should sign in and sign out a user', () => {
    cy.visit('/authentication')
    cy.findByRole('heading', { name: /authentication/i }).should('exist')

    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.get('.Toastify').within(() => {
      cy.findByLabelText(/close/i).should('exist').click()
    })

    cy.findByRole('button', { name: /log out/i }).click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/authentication`)
  })
})
