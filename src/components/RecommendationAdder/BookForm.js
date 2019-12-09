import React, { useState } from 'react'
import bookService from '../../services/bookService'
import { StyledInput, StyledButton } from '../Styles'

const BookForm = ({ items, setItems, setType }) => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')

  const addBook = (event) => {
    event.preventDefault()
    if (name.length > 0) {
      const newBook = {
        name,
        author,
      }
      bookService.create(newBook)
        .then((savedBook) => {
          setItems(items.concat(savedBook))
          setName('')
          setAuthor('')
          setType('')
        })
    }
  }

  return (
    <div>
      <form onSubmit={addBook}>
        <Input text="Name" set={setName} id="bookName" />
        <Input text="Author" set={setAuthor} id="bookAuthor" />
        <Button text="Add book" />
      </form>
    </div>
  )
}

const Input = ({ text, set, id }) => (
  <div>
    <StyledInput id={id} placeholder={text} type="text" onChange={(event) => set(event.target.value)} />
  </div>
)

const Button = ({ text }) => <StyledButton type="submit">{text}</StyledButton>


export default BookForm
