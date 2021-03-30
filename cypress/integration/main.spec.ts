describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/')
    cy.get('.App-link').should('have.text', 'Learn React')
  })
})
