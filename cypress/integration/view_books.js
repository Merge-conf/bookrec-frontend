describe('Books can be viewed', function () {
  it('Website can be accessed', function () {
    cy.visit('/')
  })

  it('Website should contain a example book', function () {
    cy.get('ul').children().contains('Kirjoittaja: J.K. Raimo')
    cy.get('ul').children().contains('otsikko: Harri Puotila ja Kallion Alepa')
  })

})