import React, { useState } from 'react'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

const App = ({ booklist }) => {
  const [books, setBooks] = useState(booklist)
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')

  const addBook = (event) => {
    event.preventDefault()
    const randomId = 10000 * Math.random
    const newBook = {
      id: randomId,
      name,
      author,
    }
    setBooks(books.concat(newBook))
  }

  return (
    <div>
      <BookForm addBook={addBook} setName={setName} setAuthor={setAuthor} />
      <BookList list={books} />
    </div>
  )
}

export default App
