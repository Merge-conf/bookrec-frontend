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
    cy.visit('/')
  })

  it('nothing is unchecked, everything is shown', function () {
    cy.contains('Homo Deus')
    cy.contains('testaudio')
  })

  it('by unchecking books only audio is shown', function () {
    cy.get('[type="checkbox"]').first().uncheck()
    cy.get('#recommendations').should('not.contain', 'Homo Deus')
    cy.get('#recommendations').should('contain', 'testaudio')
  })

  it('by unchecking audio only book is shown', function () {
    cy.get('[type="checkbox"]').last().uncheck()
    cy.get('#recommendations').should('not.contain', 'testaudio')
    cy.get('#recommendations').should('contain', 'Homo Deus')
  })

  it('by unchecking both nothing is shown', function () {
    cy.get('[type="checkbox"]').first().uncheck()
    cy.get('[type="checkbox"]').eq(1).uncheck()
    cy.get('#recommendations').should('not.contain', 'testaudio')
    cy.get('#recommendations').should('not.contain', 'Homo Deus')
  })
})