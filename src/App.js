import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import bookService from './services/bookService'
import audioService from './services/audioService'
import RecommendationAdder from './components/RecommendationAdder'
import Tables from './components/Tables'
import Player from './components/Player'

const App = () => {
  const [audio, setAudio] = useState([])
  const [books, setBooks] = useState([])
  const [url, setUrl] = useState('')

  useEffect(() => {
    bookService.getAll()
      .then((data) => setBooks(data))
    audioService.getAll()
      .then((data) => setAudio(data))
  }, [])


  return (
    <Content>
      <RecommendationAdder books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} />
      <Tables
        books={books}
        setBooks={setBooks}
        audio={audio}
        setAudio={setAudio}
        url={url}
        setUrl={setUrl}
      />
      <Player url={url} />
    </Content>
  )
}

const Content = styled.div`
  max-width: 720px;
  margin 0 auto;
  font-family: Roboto;
  color: #102a43;
  .react-h5-audio-player {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 720px;
    overflow: hidden;
    display: block;
  }
`

export default App
