import React, { useState } from 'react'
import BookForm from './BookForm'
import AudioForm from './AudioForm'
import styled from 'styled-components'

const RecommendationAdder = ({ books, setBooks, audio, setAudio }) => {
  const [type, setType] = useState('')
  console.log(books)
  return (
    <div>
      <Header>Add recommendation</Header>
      <TypeSelector value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Choose type</option>
        <option value="Book">Book</option>
        <option value="Audio">Audio</option>
      </TypeSelector>
      <FormChooser books={books} setBooks={setBooks} audio={audio} setAudio={setAudio} type={type} setType={setType} />
    </div>
  )
}

const FormChooser = ({
 type, setType, books, setBooks, audio, setAudio,
}) => {
  console.log(books)
  if (type === 'Book') return <BookForm items={books} setItems={setBooks} setType={setType} />
  if (type === 'Audio') return <AudioForm items={audio} setItems={setAudio} setType={setType} />
  return null
}

const Header = styled.h2`
  font-size: 20px;
  margin-bottom: 4px;
`
const TypeSelector = styled.select`
  position: relative;
  display: block;
  width: 100%;
  margin: 4px auto;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 16px;
  color: #60666d;
`

export default RecommendationAdder
