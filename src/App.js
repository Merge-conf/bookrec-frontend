import React, { useState, useEffect } from 'react'
import Checkbox from 'rc-checkbox'
import styled from 'styled-components'
import bookService from './services/bookService'
import audioService from './services/audioService'
import RecommendationAdder from './components/RecommendationAdder'
import Tables from './components/Tables/Tables'

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
    <Content>
      <RecommendationAdder books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} />
      <Header>Filter recommendations by type</Header>
      Books:
      <Checkbox defaultChecked onChange={() => setFilter({ ...filter, books: !filter.books })} />
      Audio:
      <Checkbox defaultChecked onChange={() => setFilter({ ...filter, audio: !filter.audio })} />
      <Tables books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} filter={filter} />
    </Content>
  )
}

const Content = styled.div`
  max-width: 720px;
  margin 0 auto;
  font-family: Roboto;
  color: #102a43;
`

const Header = styled.h2`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 4px;
`

export default App
