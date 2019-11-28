import React from 'react'

const FilterField = ({ filter, setFilter }) => {
  return (
    <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)} />
  )
}

export default FilterField
