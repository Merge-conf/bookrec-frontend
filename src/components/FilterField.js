import React from 'react'

const FilterField = ({ filter, setFilter, checkFilter, setCheckFilter }) => {
  return (
    <div>
      <h2>Filter recommendations</h2>
      <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)} id="filterText"/>
      <input type="checkbox" onChange={() => setCheckFilter({ ...checkFilter, audio: !checkFilter.audio })} />
      Audio
      <input type="checkbox" onChange={() => setCheckFilter({ ...checkFilter, books: !checkFilter.books })} />
      Books
    </div>
  )
}


export default FilterField
