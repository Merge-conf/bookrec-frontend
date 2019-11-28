import React from 'react'
import BookForm from './BookForm'

const FormChooser = ({ type, addBook }) => {
  if (type === 'Book') return <BookForm addbook={addBook} />
  if (type === 'Audio') return null
  return null
}

export default FormChooser
