import React, { useState, useEffect } from 'react'
import BookForm from './components/BookForm'
import AudioForm from './components/AudioForm'
import bookService from './services/bookService'
import audioService from './services/audioService'
import List from './components/List'
import FilterField from './components/FilterField'

const App = () => {
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

  const addAudio = (event) => {
    event.preventDefault()
    console.log(audioAuthor)
    console.log(audioName)
    console.log(audioFile)
  }

  return (
    <div>
      <BookForm items={items} setItems={setItems} />
      <FilterField filter={filter} setFilter={setFilter} />
      <List items={items} filter={filter} />
      <AudioForm addAudio={addAudio} setAudioAuthor={setAudioAuthor} setAudioName={setAudioName} setAudioFile={setAudioFile} />
    </div>
  )
}

export default App
