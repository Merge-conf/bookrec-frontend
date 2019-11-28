import React, { useState, useEffect } from 'react'
import BookForm from './components/BookForm'
import AudioForm from './components/AudioForm'
import bookService from './services/bookService'
import audioService from './services/audioService'
import List from './components/List'
import FilterField from './components/FilterField'

const App = () => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')
  const [audioAuthor, setAudioAuthor] = useState('')
  const [audioName, setAudioName] = useState('')
  const [audioFile, setAudioFile] = useState([])

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

  const addAudio = (event) => {
    event.preventDefault()
    console.log(audioAuthor)
    console.log(audioName)
    console.log(audioFile)
  }

  return (
    <div>
      <BookForm addBook={addBook} setName={setName} setAuthor={setAuthor} />
      <FilterField filter={filter} setFilter={setFilter} />
      <List items={items} filter={filter} />
      <AudioForm addAudio={addAudio} setAudioAuthor={setAudioAuthor} setAudioName={setAudioName} setAudioFile={setAudioFile} />
    </div>
  )
}

export default App
