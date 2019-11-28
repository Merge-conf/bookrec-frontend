import React, { useState, useEffect } from 'react'
import BookForm from './components/BookForm'
import bookService from './services/bookService'
import audioService from './services/audioService'
import List from './components/List'
import FilterField from './components/FilterField'

const App = () => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    bookService.getAll()
      .then((data) => setItems(items.concat(data)))
  }, [])

  useEffect(() => {
    audioService.getAll()
      .then((data) => setItems(items.concat(data)))
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
          setItems(items.concat(savedBook))
          setName('')
          setAuthor('')
        })
    }
  }

  return (
    <div>
      <BookForm addBook={addBook} setName={setName} setAuthor={setAuthor} />
      <FilterField filter={filter} setFilter={setFilter} />
      <List items={items} filter={filter} />
    </div>
  )
}

export default App
