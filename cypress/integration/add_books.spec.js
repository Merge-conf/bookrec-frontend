describe('Books can be added', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
  })

  it('with title and author', function () {
    cy.visit('http://localhost:3000')

    cy.get('select')
      .select('Book')
    
    cy.get('#bookName')
      .type('Lord of the Rings')
    cy.get('#bookAuthor')
      .type('Tolkien')

    cy.contains('Add book')
      .click()

    cy.get('[type="checkbox"]').check()

    cy.contains('Tolkien')
    cy.contains('Lord of the Rings')
  })
})
