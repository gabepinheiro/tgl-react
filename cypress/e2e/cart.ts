describe('Cart', () => {
  beforeEach(() => {
    cy.visit('authentication')
    cy.signIn()
    cy.shouldCloseToastify()
    cy.findByRole('link', { name: /new bet/i }).should('exist').click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/new-bet`)
  })

  it('should add and remove item from cart', () => {
    cy.findByText(/carrinho vazio(\.)?/i).should('exist')
    cy.dataCy('cart-items').should('exist')
    cy.dataCy('cart-item').should('not.exist')

    cy.completeGameAddToCartByIndex(1)

    cy.findByText(/carrinho vazio(\.)?/i).should('not.exist')

    cy.findByRole('button', { name: /delete item/i }).should('exist').click()
    cy.findByRole('button', { name: /sim/i }).should('exist').click()
    cy.findByText(/carrinho vazio(\.)?/i).should('exist')
  })

  it('should show error message \'Minimum cart value\'', () => {
    cy.dataCy('game-button').should('have.length.at.least', 3)

    cy.completeGameAddToCartByIndex(0)
    cy.completeGameAddToCartByIndex(1)
    cy.completeGameAddToCartByIndex(2)

    cy.findByRole('button', { name: /save/i }).should('exist').click()
    cy.findByText(/valor minímo do carrinho: R\$ \d+,\d+/i).should('exist')
  })
})
