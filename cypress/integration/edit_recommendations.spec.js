import { wait } from "@testing-library/dom"

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
      url: 'www.testurl.fi'
    }
    cy.request('POST', 'http://localhost:3001/api/audios', audio)
    cy.visit('/')
  })

  it('Book can be edited', function(){
    wait(100)
    cy.contains('Homo Deus').dblclick()
    cy.get('[placeholder="New Name"]').type('Name is changed')
    cy.get('[placeholder="New Author"]').type('Author is changed')
    cy.contains('Save').click()
    cy.get('#recommendations').should('contain', 'Name is changed')
    cy.get('#recommendations').should('contain', 'Author is changed')
  })
})