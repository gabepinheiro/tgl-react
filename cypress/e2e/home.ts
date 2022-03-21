
describe('Home', () => {
  it('should filter by game type', () => {
    cy.visit('/authentication')
    const user = {
      email: 'e2ewithdata@tgl.com.br',
      passoword: '123456',
    }
    cy.signIn(user.email, user.passoword)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.get('.Toastify').within(() => {
      cy.findByLabelText(/close/i).click()
    }).should('exist')

    cy.dataCy('game-buttons').should('exist').within(() => {
      cy.dataCy('game-button').should('have.length.at.least', 3)
    })

    // Somente Lotofácil
    cy.findByRole('button', { name: /lotofácil/i }).click()
    cy.dataCy('bets').within(() => {
      cy.dataCy('game-card').within(() => {
        cy.dataCy('game-name').findAllByText(/lotofácil/i).should('exist')
      })
    })

    // Somente Mega-Sena
    cy.findByRole('button', { name: /lotofácil/i }).click()

    cy.findByRole('button', { name: /mega-sena/i }).click()
    cy.dataCy('bets').within(() => {
      cy.dataCy('game-card').within(() => {
        cy.dataCy('game-name').findAllByText(/mega-sena/i).should('exist')
      })
    })

    // Somente Quina
    cy.findByRole('button', { name: /mega-sena/i }).click()

    cy.findByRole('button', { name: /quina/i }).click()
    cy.dataCy('bets').within(() => {
      cy.dataCy('game-card').within(() => {
        cy.dataCy('game-name').findAllByText(/quina/i).should('exist')
      })
    })

    // Lotofácil, Mega-Sena e Quina
    cy.findByRole('button', { name: /lotofácil/i }).click()
    cy.findByRole('button', { name: /mega-sena/i }).click()

    cy.dataCy('bets').within(() => {
      cy.dataCy('game-card').within(() => {
        cy.dataCy('game-name').findAllByText(/lotofácil|mega-sena|quina/i).should('exist')
      })
    })
  })
})
