import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up a user', () => {
    cy.visit('/register')
    cy.findByRole('heading', { name: /registration/i }).should('exist')

    const user = createUser()
    cy.signUp(user)

    cy.findByText(/registro realizado com sucesso!/i).should('exist')
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/authentication`)
  })
})
