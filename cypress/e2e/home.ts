
describe('Home', () => {
  beforeEach(() => {
    cy.visit('/authentication')
  })

  it('should filter by game type', () => {
    const user = {
      email: 'e2ewithdata@tgl.com.br',
      passoword: '123456',
    }
    cy.signIn(user.email, user.passoword)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.shouldCloseToastify()

    cy.dataCy('game-buttons').should('exist').within(() => {
      cy.dataCy('game-button').should('have.length.at.least', 3)
    })

    // Somente Lotofácil
    cy.findByRole('button', { name: /lotofácil/i }).click()
    cy.shouldRenderBetsGameNames(/lotofácil/i)

    // Somente Mega-Sena
    cy.findByRole('button', { name: /lotofácil/i }).click()
    cy.findByRole('button', { name: /mega-sena/i }).click()
    cy.shouldRenderBetsGameNames(/mega-sena/i)

    // Somente Quina
    cy.findByRole('button', { name: /mega-sena/i }).click()
    cy.findByRole('button', { name: /quina/i }).click()
    cy.shouldRenderBetsGameNames(/quina/i)

    // Lotofácil, Mega-Sena e Quina
    cy.findByRole('button', { name: /lotofácil/i }).click()
    cy.findByRole('button', { name: /mega-sena/i }).click()
    cy.shouldRenderBetsGameNames(/mega-sena|lotofácil|quina/i)
  })

  it('should display the message "You don\'t have any bets registered yet."', () => {
    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.shouldCloseToastify()

    cy.findByText(/Você ainda não possui apostas cadastradas./i).should('exist')
  })
})
