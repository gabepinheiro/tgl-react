import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up a user', () => {
    cy.visit('/register')
    cy.findByRole('heading', { name: /registration/i }).should('exist')

    const user = createUser()

    cy.findByPlaceholderText(/name/i).type(user.name)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/password/i).type(user.password)

    cy.findByRole('button', { name: /register/i }).click()

    cy.findByText(/registro realizado com sucesso!/i).should('exist')
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/authentication`)
  })
})
