import React, { useState, useEffect } from 'react'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
import bookService from './services/bookService'

const App = () => {
  const [books, setBooks] = useState([])
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    bookService.getAll()
      .then((data) => setBooks(data))
  }, [])

  const addBook = (event) => {
    event.preventDefault()
    const randomId = 10000 * Math.random
    const newBook = {
      id: randomId,
      name,
      author,
    }
    bookService.create(newBook)
    setBooks(books.concat(newBook))
    setName('')
    setAuthor('')
  }

  return (
    <div>
      <BookForm addBook={addBook} setName={setName} setAuthor={setAuthor} />
      <BookList list={books} />
      {process.env.NODE_ENV}
    </div>
  )
}

export default App
