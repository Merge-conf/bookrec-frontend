import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import BookList from './BookList'

afterEach(cleanup)

test('renders books name and author', () => {
  const list = [
    {
      name: 'The Dark Tower',
      author: 'Stephen King',
      id: '1',
    }, {
      name: 'Good Omens',
      author: 'Terry Pratchett and Neil Gaiman',
      id: '2',
    },
  ]

  const component = render(<BookList list={list} />)

  expect(component.container).toHaveTextContent('Kirjoittaja: Terry Pratchett and Neil Gaiman Otsikko: Good Omens')
})

test('renders all books in booklist', () => {
  const list = [
    {
      name: 'The Dark Tower',
      author: 'Stephen King',
      id: '1',
    }, {
      name: 'Good Omens',
      author: 'Terry Pratchett and Neil Gaiman',
      id: '2',
    },
  ]

  const component = render(<BookList list={list} />)
  const books = component.container.querySelectorAll('.book')
  expect(books.length).toBe(2)
})
