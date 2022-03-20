describe('Example', () => {
  it('should go to Google', () => {
    cy.google()
  })

  it('search for the dollar exchange rate', () => {
    cy.google()

    cy.findByTitle(/pesquisar/i).type('dolar') // testing-library command
    cy.get('form').submit()
    cy.url().should('contain', 'search?q=dolar')
  })
})
