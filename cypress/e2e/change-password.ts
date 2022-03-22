describe('Change password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/change-password')

    cy.findByPlaceholderText(/^new password/i).should('exist').type('123456')
    cy.findByPlaceholderText(/^confirm password/i).should('exist').type('654321')
    cy.findByRole('button', { name: /change/i }).should('exist').click()

    cy.findByText(/as senhas não correspondem/i).should('exist')
  })

  it('should show error if code is not valid', () => {
    cy.intercept('POST', '**/reset', res => {
      res.reply({
        status: 404,
        body: {},
      })
    })

    cy.visit('/change-password?code=wrong_code')

    cy.findByPlaceholderText(/^new password/i).should('exist').type('123456')
    cy.findByPlaceholderText(/^confirm password/i).should('exist').type('123456')
    cy.findByRole('button', { name: /change/i }).should('exist').click()

    cy.findByText(/código inválido(\.)?/i).should('exist')
  })

  it('should fill password and confirm password, and redirect user to authentication page', () => {
    cy.intercept('POST', '**/reset/*', {
      statusCode: 200,
      body: {},
    })

    cy.visit('/change-password?code=valid_code')

    cy.findByPlaceholderText(/^new password/i).should('exist').type('123456')
    cy.findByPlaceholderText(/^confirm password/i).should('exist').type('123456')
    cy.findByRole('button', { name: /change/i }).should('exist').click()
    cy.findByText(/sua senha foi alterada com sucesso(\.)?/i).should('exist')
    cy.url().should('eq', `${Cypress.config().baseUrl}/authentication`)
  })
})
