import React from 'react'

const FilterField = ({ filter, setFilter }) => {
  return (
    <div>
      <h2>Filter recommendations</h2>
      <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)} />
    </div>
  )
}

export default FilterField
