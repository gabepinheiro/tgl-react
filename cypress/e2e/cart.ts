describe('Cart', () => {
  it('should add and remove item from cart', () => {
    cy.visit('authentication')
    cy.signIn()
    cy.shouldCloseToastify()

    cy.findByRole('link', { name: /new bet/i }).should('exist').click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/new-bet`)

    cy.findByText(/carrinho vazio(\.)?/i).should('exist')
    cy.dataCy('cart-items').should('exist')
    cy.dataCy('cart-item').should('not.exist')

    cy.findByRole('button', { name: /complete game/i }).should('exist').click()
    cy.findByRole('button', { name: /add to cart/i }).should('exist').click()
    cy.findByText(/carrinho vazio(\.)?/i).should('not.exist')

    cy.findByRole('button', { name: /delete item/i }).should('exist').click()
    cy.findByRole('button', { name: /sim/i }).should('exist').click()
    cy.findByText(/carrinho vazio(\.)?/i).should('exist')
  })
})
