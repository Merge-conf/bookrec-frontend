describe('Audio recommendation can be added', function () {
    beforeEach(function () {
      cy.request('POST', 'http://localhost:3001/api/testing/reset')
      cy.server()
      cy.route({
        method: 'POST',
        url: 'https://bookrec-file-hosting.herokuapp.com/api/add',
        response: { url: 'https://bookrec-file-hosting.herokuapp.com/api/test' }
      })
    })
  
    it('with name, creator and a mp3 file', function () {
      cy.visit('http://localhost:3000')
  
      cy.get('select')
        .select('Audio')
      
      cy.get('#audioName')
        .type('Fullstack Podcast')
      cy.get('#audioCreator')
        .type('Anon')

      const fileName = 'example.json';
      cy.fixture(fileName).then(fileContent => {
        cy.get('#audioFile').upload({ fileContent, fileName, mimeType: 'application/json', encoding: 'utf8' });
      });
  
      cy.contains('Upload')
        .click()
  
      cy.get('[type="checkbox"]').check()
  
      cy.contains('Title: Fullstack Podcast')
        .contains('play')
    })
  })
  