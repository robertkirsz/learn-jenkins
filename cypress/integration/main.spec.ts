describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.App-link').should('have.text', 'Learn React')
  })
})