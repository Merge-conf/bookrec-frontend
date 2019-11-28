import React, { useState } from 'react'
import FormChooser from './FormChooser'

const RecommendationAdd = ({ addBook }) => {
  const [type, setType] = useState('')

  return (
    <div>
      <h2>Add recommendation</h2>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value=""> </option>
        <option value="Book">Book</option>
        <option value="Audio">Audio</option>
      </select>
      <FormChooser type={type} addBook={addBook} />
    </div>
  )
}

export default RecommendationAdd
