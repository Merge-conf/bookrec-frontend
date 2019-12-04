import React, { useState, useEffect } from 'react'
import Checkbox from 'rc-checkbox'
import List from './components/List'
import bookService from './services/bookService'
import audioService from './services/audioService'
import FilterField from './components/FilterField'
import EditForm from './components/EditForm'
import RecommendationAdder from './components/RecommendationAdder'
import Tables from './components/Tables'

const App = () => {
  const [filter, setFilter] = useState({ books: true, audio: true })
  const [audio, setAudio] = useState([])
  const [books, setBooks] = useState([])

  useEffect(() => {
    bookService.getAll()
      .then((data) => setBooks(data))
    audioService.getAll()
      .then((data) => setAudio(data))
  }, [])


  return (
    <div>
      <RecommendationAdder books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} />
      Books:
      <Checkbox defaultChecked onChange={() => setFilter({ ...filter, books: !filter.books })} />
      Audio:
      <Checkbox defaultChecked onChange={() => setFilter({ ...filter, audio: !filter.audio })} />
      <Tables books={books} audio={audio} filter={filter} /> 
    </div>
  )
}

export default App
