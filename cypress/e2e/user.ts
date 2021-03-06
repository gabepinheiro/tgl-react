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

  it('should go to user account page', () => {
    cy.visit('/authentication')
    cy.signIn()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.shouldCloseToastify()

    cy.findByRole('link', { name: /account/i }).should('exist').click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/account`)
    cy.findByRole('heading', { name: /cypress/i }).should('exist')
  })

  it('should edit/update account information', () => {
    cy.intercept('PUT', '**/user/update', res => {
      res.reply({
        status: 200,
        body: {
          name: 'New name',
        },
      })
    })

    cy.visit('/authentication')
    cy.signIn()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.shouldCloseToastify()

    cy.findByRole('link', { name: /account/i }).should('exist').click()
    cy.findByRole('heading', { name: /cypress/i }).should('exist')

    cy.findByRole('button', { name: /editar conta/i }).should('exist').click()
    cy.get('input').first().should('have.value', 'Cypress').clear().type('New Name')
    cy.findByRole('button', { name: /save/i }).should('exist').click()

    cy.findByRole('heading', { name: /cypress/i }).should('not.exist')
    cy.findByRole('heading', { name: /new name/i }).should('exist')
  })
})
