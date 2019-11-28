import React from 'react'
import BookForm from './BookForm'
import AudioForm from './AudioForm'

const FormChooser = ({ type, addBook }) => {
  if (type === 'Book') return <BookForm addbook={addBook} />
  if (type === 'Audio') return <AudioForm />
  return null
}

export default FormChooser
