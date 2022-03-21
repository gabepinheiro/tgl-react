describe('Forgot Password', () => {
  it('should fill in the email, confirm successfully and redirect to change the password', () => {
    cy.intercept('POST', '**/reset', {
      statusCode: 200,
      body: {
        name: 'Cypress',
      },
    })

    cy.visit('/reset-password')
    cy.url().should('eq', `${Cypress.config().baseUrl}/reset-password`)

    cy.findByPlaceholderText(/email/i).should('exist').type('e2e@tgl.com.br')
    cy.findByRole('button', { name: /send link/i }).should('exist').click()
    cy.findByText(/olá, cypress/i).should('exist')
  })

  it('should fill in invalid email and receive error message', () => {
    cy.intercept('POST', '**/reset', {
      statusCode: 404,
      body:
        {
          message: 'Usuário não encontrado em nossa base de dados',
        },
    })

    cy.visit('/reset-password')
    cy.url().should('eq', `${Cypress.config().baseUrl}/reset-password`)

    cy.findByPlaceholderText(/email/i).should('exist').type('gabe@tgl.com.br')
    cy.findByRole('button', { name: /send link/i }).should('exist').click()
    cy.findAllByText(/usuário não encontrado em nossa base de dados/i).should('exist')

    cy.url().should('eq', `${Cypress.config().baseUrl}/reset-password`)
  })
})
