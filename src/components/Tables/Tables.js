import React, { useState } from 'react'
import BookTable from './BookTable'
import AudioTable from './AudioTable'
import FilterTables from './FilterTables'
import styled from 'styled-components'

const Tables = ({ books, setBooks, audio, setAudio, url, setUrl }) => {
  const [filter, setFilter] = useState({ books: true, audio: true })

  return (
    <StyledTables id="recommendations">
      <FilterTables filter={filter} setFilter={setFilter} />
      <BookTable
        data={books}
        setData={setBooks}
        render={filter.books}
      />
      <AudioTable
        data={audio}
        setData={setAudio}
        render={filter.audio}
        url={url}
        setUrl={setUrl}
      />
    </StyledTables>
  )
}

const StyledTables = styled.div`
  margin-bottom: 70px;
`

export default Tables
