import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import bookService from './services/bookService'
import audioService from './services/audioService'
import RecommendationAdder from './components/RecommendationAdder'
import Tables from './components/Tables'

const App = () => {
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
      <Tables books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} />
    </Content>
  )
}

const Content = styled.div`
  max-width: 720px;
  margin 0 auto;
  font-family: Roboto;
  color: #102a43;
`

export default App
