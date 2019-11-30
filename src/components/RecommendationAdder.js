import React, { useState } from 'react'
import BookForm from './BookForm'
import AudioForm from './AudioForm'

const RecommendationAdder = ({ items, setItems }) => {
  const [type, setType] = useState('')

  return (
    <div>
      <h2>Add recommendation</h2>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Choose type</option>
        <option value="Book">Book</option>
        <option value="Audio">Audio</option>
      </select>
      <FormChooser type={type} items={items} setItems={setItems} setType={setType} />
    </div>
  )
}

const FormChooser = ({
 type, setType, items, setItems 
}) => {
  if (type === 'Book') return <BookForm items={items} setItems={setItems} setType={setType} />
  if (type === 'Audio') return <AudioForm items={items} setItems={setItems} setType={setType} />
  return null
}

export default RecommendationAdder
