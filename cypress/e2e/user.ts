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

    cy.findByPlaceholderText(/email/i).type('e2e@tgl.com.br')
    cy.findByPlaceholderText(/password/i).type('123456')

    cy.findByRole('button', { name: /log in/i }).click()

    cy.findByText(/cypress/i).should('exist')
  })
})
