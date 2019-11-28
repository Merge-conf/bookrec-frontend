import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import BookForm from './BookForm'

test('Can add book', async () => {
  let items = []
  const setType = jest.fn()
  const setItems = (i) => {
    items = i
  }

  const component = render(<BookForm items={items} setItems={setItems} setType={setType} />)
  const input = component.container.querySelector('input')
  const form = component.container.querySelector('form')

  fireEvent.change(input, { target: { value: 'testing' } })
  fireEvent.submit(form)

  await wait(() => {
    expect(items[0].name).toBe('testing')
  })
})
