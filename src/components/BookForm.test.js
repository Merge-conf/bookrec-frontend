import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BookForm from './BookForm'

const BookFormWrapper = (props) => {
  const setName = (event) => {
    console.log(`nimi: ${event.target.value}`)
    props.state.name = event.target.value.name
  }
  const setAuthor = (event) => {
    console.log(`kirjoittaja: ${event.target.value}`)
    props.state.author = event.target.value
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

  fireEvent.change(input, { target: { Name: 'testing', Author: 'MR.Merge' } })
  fireEvent.submit(form)

  expect(onSubmit.mock.calls.length).toBe(1)
  expect(state.name).toBe('testing')
})
