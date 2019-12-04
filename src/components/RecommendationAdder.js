import React, { useState } from 'react'
import BookForm from './BookForm'
import AudioForm from './AudioForm'

const RecommendationAdder = ({ books, setBooks, audio, setAudio }) => {
  const [type, setType] = useState('')
  console.log(books)
  return (
    <div>
      <h2>Add recommendation</h2>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Choose type</option>
        <option value="Book">Book</option>
        <option value="Audio">Audio</option>
      </select>
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

export default RecommendationAdder
