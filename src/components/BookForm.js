import React from 'react'

const BookForm = ({ addBook, setName, setAuthor }) => (
  <div>
    <form onSubmit={addBook}>
      <Input text="Name: " set={setName} />
      <Input text="Author: " set={setAuthor} />
      <Button text="Add book" />
    </form>
  </div>
)

const Input = ({ text, set }) => (
  <div>
    {text}
    <input type="text" onChange={(event) => set(event.target.value)} />
  </div>
)

const Button = ({ text }) => <button type="submit">{text}</button>


export default BookForm
