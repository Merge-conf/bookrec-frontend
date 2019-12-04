import React, { useState, useEffect } from 'react'
import List from './components/List'
import bookService from './services/bookService'
import audioService from './services/audioService'
import FilterField from './components/FilterField'
import EditForm from './components/EditForm'
import RecommendationAdder from './components/RecommendationAdder'
import Table from './components/Table'

const App = () => {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')
  const [checkFilter, setCheckFilter] = useState({ books: false, audio: false })
  const [inEdit, setInEdit] = useState(null)
  const [audio, setAudio] = useState([])
  const [books, setBooks] = useState([])

  useEffect(() => {
    bookService.getAll()
      .then((data) => setBooks(data))
    audioService.getAll()
      .then((data) => setAudio(data))
  }, [])

  const bookColumns = [
    {
      name: 'author',
      selector: 'author',
      sortable: true
    },
    {
      name: 'name',
      selector: 'name',
      sortable: true
    }
  ]

  const audioColumns = [
    {
      name: 'creator',
      selector: 'creator',
      sortable: true
    },
    {
      name: 'name',
      selector: 'name',
      sortable: true
    }
  ]

  return (
    <div>
      <RecommendationAdder books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} />
      <Table title="Books" data={books} columns={bookColumns} />
      <Table title="Audio" data={audio} columns={audioColumns} />
    </div>
  )
}

export default App
