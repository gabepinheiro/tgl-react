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

  it('should fill in an email that already exists and show an error message', () => {
    cy.visit('/register')

    const user = {
      name: 'cypress',
      email: 'e2e@tgl.com.br',
      password: '123456',
    }

    cy.signUp(user)

    cy.url().should('contain', '/register')
    cy.findByText(/email already exists/i).should('exist')
  })

  it('should show required field error and password must be at least 6 character', () => {
    cy.visit('/register')

    cy.findByRole('button', { name: /register/i }).click()

    cy.findAllByText(/campo de \w+ é obrigatório/i).should('have.length.at.least', 1)
    cy.findByText(/least 6 character/i).should('exist')
  })
})
