describe('Change password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password')
    cy.findByPlaceholderText(/email/i).should('exist').type('e2e@tgl.com.br')
    cy.findByRole('button', { name: /send link/i }).should('exist').click()
    cy.shouldCloseToastify()

    cy.url().should('eq', `${Cypress.config().baseUrl}/change-password`)
    cy.findByPlaceholderText(/^new password/i).should('exist').type('123456')
    cy.findByPlaceholderText(/^confirm password/i).should('exist').type('654321')
    cy.findByRole('button', { name: /change/i }).should('exist').click()

    cy.findByText(/as senhas não correspondem/i).should('exist')
  })
})
