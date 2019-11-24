describe('Books can be viewed', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const book = {
      name: 'Homo Deus',
      author: 'Yuval Noah Harari'
    }

    cy.request('POST', 'http://localhost:3001/api/books/', book)

  })

  it('Website can be accessed', function () {
    cy.visit('/')
  })

  it('Website should contain a example book', function () {
    cy.get('ul').children().contains('Kirjoittaja: Yuval Noah Harari')
    cy.get('ul').children().contains('otsikko: Homo Deus')
  })

})