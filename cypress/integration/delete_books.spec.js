describe('book can be deleted', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
    })

    it('Can delete one book', function () {

        const book = {
            name: 'Homo Deus',
            author: 'Yuval Noah Harari',
        }

        cy.request('POST', 'http://localhost:3001/api/books/', book)

        cy.visit('http://localhost:3000')

        cy.get('[type="checkbox"]').last().uncheck()

        cy.get('[type="checkbox"]').last().check()

        cy.contains('1 item selected')

        cy.contains('Delete selected').click()

        cy.contains('There are no records to display')
    })

    it('Can delete one audio', function () {

        const audio = {
            name: 'testaudio',
            creator: 'testcreator',
            url: 'testurl'
        }
        cy.request('POST', 'http://localhost:3001/api/audios', audio)

        cy.visit('http://localhost:3000')

        cy.get('[type="checkbox"]').first().uncheck()

        cy.get('[type="checkbox"]').last().check()

        cy.contains('1 item selected')

        cy.contains('Delete selected').click()

        cy.contains('There are no records to display')

    })

    it('Can delete several books', function () {

        const book1 = {
            name: 'Homo Deus',
            author: 'Yuval Noah Harari',
        }

        const book2 = {
            name: 'Homo Deus, vol. 2',
            author: 'Yuval Noah Harari jr.',
        }

        cy.request('POST', 'http://localhost:3001/api/books/', book1)
        cy.request('POST', 'http://localhost:3001/api/books/', book2)

        cy.visit('http://localhost:3000')

        cy.get('[type="checkbox"]').last().uncheck()

        cy.get('[name="select-all-rows"]').check()

        cy.contains('2 items selected')

        cy.contains('Delete selected').click()

        cy.contains('There are no records to display')
    })

    it('Can delete several audio', function () {

        const audio1 = {
            name: 'testaudio',
            creator: 'testcreator',
            url: 'testurl'
        }

        const audio2 = {
            name: 'testaudio2',
            creator: 'testcreator2',
            url: 'testurl2'
        }

        cy.request('POST', 'http://localhost:3001/api/audios', audio1)
        cy.request('POST', 'http://localhost:3001/api/audios', audio2)

        cy.visit('http://localhost:3000')

        cy.get('[type="checkbox"]').first().uncheck()

        cy.get('[name="select-all-rows"]').check()

        cy.contains('2 items selected')

        cy.contains('Delete selected').click()

        cy.contains('There are no records to display')

    })

    it('Can delete distinct book', function () {

        const book1 = {
            name: 'Homo Deus',
            author: 'Yuval Noah Harari',
        }

        const book2 = {
            name: 'Homo Deus, vol. 2',
            author: 'Yuval Noah Harari jr.',
        }

        cy.request('POST', 'http://localhost:3001/api/books/', book1)
        cy.request('POST', 'http://localhost:3001/api/books/', book2)

        cy.visit('http://localhost:3000')

        cy.get('[type="checkbox"]').last().uncheck()

        cy.get('[type="checkbox"]').last().check()

        cy.contains('1 item selected')

        cy.contains('Delete selected').click()

        cy.contains('Homo Deus, vol. 2').should('not.exist')
    })

    it('Can delete distinct audio', function () {

        const audio1 = {
            name: 'testaudio',
            creator: 'testcreator',
            url: 'testurl'
        }

        const audio2 = {
            name: 'testaudio2',
            creator: 'testcreator2',
            url: 'testurl2'
        }

        cy.request('POST', 'http://localhost:3001/api/audios', audio1)
        cy.request('POST', 'http://localhost:3001/api/audios', audio2)

        cy.visit('http://localhost:3000')

        cy.get('[type="checkbox"]').first().uncheck()

        cy.get('[type="checkbox"]').last().check()

        cy.contains('1 item selected')

        cy.contains('Delete selected').click()

        cy.contains('testcreator2').should('not.exist')
    })
})