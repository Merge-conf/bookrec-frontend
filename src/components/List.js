import React from 'react'

const List = ({ items, filter }) => {
  const filterItems = () => items.filter((item) => item.name.includes(filter))
  const mapItems = () => filterItems().map((item) => <li>{item.name}</li>)

  return (
    <ul>
      {mapItems()}
    </ul>
  )
}

export default List
