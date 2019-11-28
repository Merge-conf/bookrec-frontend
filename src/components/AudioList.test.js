import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import AudioList from './AudioList'

let container
const audios = [
  {
    name: 'Podcast of the year',
    id: '1'
  },
  {
    name: 'Imagine',
    creator: 'John Lennon',
    id: '2'
  },
]

describe('<AudioList />', () => {
  beforeEach(() => {
    ({ container } = render(<AudioList list={audios} />))
  })

  test('renders all audios names', () => {
    expect(container).toHaveTextContent('Podcast of the year')
    expect(container).toHaveTextContent('Imagine')
  })

  test('renders creator if audio has one', () => {
    expect(container).toHaveTextContent('John Lennon')
  })

  afterEach(cleanup)
})
