import React from 'react'

const BookForm = ({ addBook, setName, setAuthor }) => (
  <div>
    <form onSubmit={addBook}>
      <Input text="Name: " set={setName} id="bookName" />
      <Input text="Author: " set={setAuthor} id="bookAuthor" />
      <Button text="Add book" />
    </form>
  </div>
)

const Input = ({ text, set, id }) => (
  <div>
    {text}
    <input id={id} type="text" onChange={(event) => set(event.target.value)} />
  </div>
)

const Button = ({ text }) => <button type="submit">{text}</button>


export default BookForm
