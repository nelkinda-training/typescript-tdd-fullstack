/// <reference types="cypress" />
describe('My App', () => {
    beforeEach(() => {
        // spin up Vite dev server first: pnpm dev
        cy.visit('/')
    })

    it('renders the main heading', () => {
        cy.contains('Vite + React').should('be.visible')
    })

    it('increments counter on click', () => {
        cy.get('button').contains('count is 0').click()
        cy.get('button').should('contain', 'count is 1')
    })
})