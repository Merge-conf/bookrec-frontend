import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BookForm from './BookForm'

const BookFormWrapper = (props) => {
  const setName = (value) => {
    props.state.name = value
  }
  const setAuthor = (value) => {
    props.state.author = value
  }

  return (
    <BookForm addBook={props.onSubmit} setName={setName} setAuthor={setAuthor} />
  )
}

test('Can add book', () => {
  const onSubmit = jest.fn()
  const state = {
    name: '',
    author: '',
  }

  const component = render(<BookFormWrapper onSubmit={onSubmit} state={state} />)
  const input = component.container.querySelector('input')
  const form = component.container.querySelector('form')

  fireEvent.change(input, { target: { value: 'testing' } })
  fireEvent.submit(form)

  expect(onSubmit.mock.calls.length).toBe(1)
  expect(state.name).toBe('testing')
})
