import React, { useState } from 'react'
import BookTable from './BookTable'
import AudioTable from './AudioTable'
import FilterTables from './FilterTables'

const Tables = ({ books, setBooks, audio, setAudio }) => {
  const [filter, setFilter] = useState({ books: true, audio: true })

  return (
    <div>
      <FilterTables filter={filter} setFilter={setFilter} />
      <BookTable data={books} setData={setBooks} render={filter.books} />
      <AudioTable data={audio} setData={setAudio} render={filter.audio} />
    </div>
  )
}

export default Tables
