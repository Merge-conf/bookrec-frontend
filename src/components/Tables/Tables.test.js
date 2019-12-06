import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Tables from './Tables'

let container
let getByText

const books = [
  {
    name: 'Lord of the Rings',
    author: 'Tolkien',
    id: '1',
  },
  {
    name: 'Harry Potter',
    author: 'Rowling',
    id: '2',
  },
]
const audio = [
  {
    name: 'Podcast',
    creator: 'Anon',
    url: 'www.osoite.fi',
    id: '1',
  },
  {
    name: 'Nature sounds',
    creator: 'BBC',
    url: 'www.bbs.com',
    id: '2',
  },
]
const setBooks = jest.fn()
const setAudio = jest.fn()

describe('<Tables />', () => {
  beforeEach(() => {
    ({ container, getByText } = render(
      <Tables books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} />
    ))
  })

  test('book names are shown by default', () => {
    expect(container).toHaveTextContent('Lord of the Rings')
    expect(container).toHaveTextContent('Harry Potter')
  })

  test('book authors are shown by default', () => {
    expect(container).toHaveTextContent('Tolkien')
    expect(container).toHaveTextContent('Rowling')
  })

  test('audio names are shown by default', () => {
    expect(container).toHaveTextContent('Podcast')
    expect(container).toHaveTextContent('Nature sounds')
  })

  test('audio creators are shown by default', () => {
    expect(container).toHaveTextContent('Lord of the Rings')
    expect(container).toHaveTextContent('Harry Potter')
  })

  afterEach(cleanup)
})
