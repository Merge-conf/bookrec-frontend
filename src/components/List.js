import React from 'react'

const List = ({ items, filter }) => {
  const filterItems = () => items.filter((item) => item.name.toUpperCase().includes(filter.toUpperCase()))

  const mapItems = () => filterItems().map((item) => <li>{item.name}</li>)

  return (
    <div>
      <h2>Recommendation list</h2>
      <ul>
        {mapItems()}
      </ul>
    </div>
  )
}

export default List
