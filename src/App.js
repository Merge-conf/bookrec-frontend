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
    if (name.length > 0) {
      const newBook = {
        name,
        author,
      }
      bookService.create(newBook)
        .then((savedBook) => {
          setBooks(books.concat(savedBook))
          setName('')
          setAuthor('')
        })
    }
  }

  return (
    <div>
      <BookForm addBook={addBook} setName={setName} setAuthor={setAuthor} />
      <BookList list={books} />
    </div>
  )
}

export default App
