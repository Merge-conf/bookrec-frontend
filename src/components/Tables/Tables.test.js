import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Tables from './Tables'

let container

const books = [
  {
    name: 'Lord of the Rings',
    author: 'Tolkien',
    id: 'book1',
  },
  {
    name: 'Harry Potter',
    author: 'Rowling',
    id: 'book2',
  },
]
const audio = [
  {
    name: 'Podcast',
    creator: 'Creed',
    url: 'www.osoite.fi',
    id: 'audio1',
  },
  {
    name: 'Nature sounds',
    creator: 'BBC',
    url: 'www.bbs.com',
    id: 'audio2',
  },
]
const setBooks = jest.fn()
const setAudio = jest.fn()

describe('<Tables />', () => {
  beforeEach(() => {
    ({ container } = render(
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
    expect(container).toHaveTextContent('Creed')
    expect(container).toHaveTextContent('BBC')
  })

  test('books can be sorted by name', () => {
    let firstBook = container.querySelector('[id^=row-book]')
    expect(firstBook).toHaveTextContent('Lord of the Rings')

    container.querySelector('[id=column-name]').click()
    firstBook = container.querySelector('[id^=row-book]')
    expect(firstBook).toHaveTextContent('Harry Potter')
  })

  test('books can be sorted by author', () => {
    let firstBook = container.querySelector('[id^=row-book]')
    expect(firstBook).toHaveTextContent('Tolkien')

    container.querySelector('[id=column-author]').click()
    firstBook = container.querySelector('[id^=row-book]')
    expect(firstBook).toHaveTextContent('Rowling')
  })

  test('audio can be sorted by name', () => {
    let firstAudio = container.querySelector('[id^=row-audio]')
    expect(firstAudio).toHaveTextContent('Podcast')

    container.querySelectorAll('[id=column-name]')[1].click()
    firstAudio = container.querySelector('[id^=row-audio]')
    expect(firstAudio).toHaveTextContent('Nature sounds')
  })

  test('audio can be sorted by creator', () => {
    let firstAudio = container.querySelector('[id^=row-audio]')
    expect(firstAudio).toHaveTextContent('Creed')

    container.querySelector('[id=column-creator]').click()
    firstAudio = container.querySelector('[id^=row-audio]')
    expect(firstAudio).toHaveTextContent('BBC')
  })

  afterEach(cleanup)
})
