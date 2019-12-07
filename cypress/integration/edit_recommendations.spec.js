describe('Recommendations can be edited', function(){
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const book = {
      name: 'Homo Deus',
      author: 'Yuval Noah Harari',
    }

    cy.request('POST', 'http://localhost:3001/api/books/', book)

    const audio = {
      name: 'testaudio',
      creator: 'testcreator',
      url: 'testurl'
    }
    cy.request('POST', 'http://localhost:3001/api/audios', audio)
    cy.visit('/')
  })

  it('Book can be edited', function(){
    cy.contains('edit').click()
    cy.get('#bookName').type('Name is changed')
    cy.get('#bookAuthor').type('Author is changed')
    cy.get('#submitBook').click()
    cy.contains('Name: Name is changed')
    cy.contains('Author: Author is changed')
  })

  it('Audio can be edited', function(){
    cy.contains('edit').click()
    cy.get('#audioName').type('Name is changed')
    cy.get('#audioCreator').type('Creator is changed')
    cy.get('#audioUrl').type('Url is changed, not valid in any way')
    cy.get('#submitAudio').click()
    cy.contains('Name is changed')
    cy.contains('Creator is changed')
  })

  it('Cancel closes the form', function(){
    cy.contains('edit').click()
    cy.contains('cancel').click()
    cy.get('body').should('not.contain', 'name:')
    cy.get('body').should('not.contain', 'author:')
  })
})