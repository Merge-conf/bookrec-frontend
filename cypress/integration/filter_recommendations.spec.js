describe('Recommendations can be filtered', function () {
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
  })

  it('nothing is checked, nothing is shown', function () {
    cy.visit('/')
    cy.get('ul').should('not.contain', 'Homo Deus')
    cy.get('ul').should('not.contain', 'testaudio')
  })

  it('by checking correct box audio is shown', function () {
    cy.visit('/')
    cy.get('[type="checkbox"]').first().check()
    cy.contains('Title: testaudio')
    cy.contains('testcreator')
  })

  it('by checking correct box book is shown', function () {
    cy.visit('/')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="checkbox"]').first().uncheck()
    cy.contains('Name: Homo Deus')
    cy.contains('Author: Yuval Noah Harari')
  })

  it('by checking both audio and book are shown', function () {
    cy.visit('/')
    cy.get('[type="checkbox"]').check()
    cy.contains('Title: testaudio')
    cy.contains('testcreator')
    cy.contains('Name: Homo Deus')
    cy.contains('Author: Yuval Noah Harari')
  })

  it('when given a filter string book is shown', function () {
    cy.visit('/')
    cy.get('[type="checkbox"]').check()
    cy.get('#filterText').type('Deus')
    cy.contains('Name: Homo Deus')
    cy.contains('Author: Yuval Noah Harari')
  })

  it('when given a filter string audio is shown', function () {
    cy.visit('/')
    cy.get('[type="checkbox"]').check()
    cy.get('#filterText').type('test')
    cy.contains('Title: testaudio')
    cy.contains('testcreator')
  })
})