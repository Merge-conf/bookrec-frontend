import React from 'react'
import BookTable from './BookTable'
import AudioTable from './AudioTable'

const Tables = ({ books, setBooks, audio, setAudio, filter }) => (
  <div>
    <BookTable data={books} setData={setBooks} render={filter.books} />
    <AudioTable data={audio} setData={setAudio} render={filter.audio} />
  </div>
)

export default Tables
