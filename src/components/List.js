import React from 'react'

const List = ({ items, filter }) => {
  const filterItems = (list) => list.filter((item) => {
    const itemUpper = item.name.toUpperCase()
    const filterUpper = filter.toUpperCase()
    return itemUpper.includes(filterUpper)
  })

  const mapItems = (list) => list.map((item) => {
    if (!item.name) return <li id={item.id}>no name</li>
    if (item.author) return <Book id={item.id} name={item.name} author={item.author} />
    if (item.creator && item.url) return <Audio id={item.id} name={item.name} creator={item.creator} url={item.url} />
    return <li>not book or audio</li>
  })

  return (
    <div>
      <h2>Recommendation list</h2>
      <ul>
        {mapItems(filterItems(items))}
      </ul>
    </div>
  )
}


const Book = ({ id, name, author }) => {
  return (
    <li id={id}>
      {`Nimi: ${name}, `}
      {`Kirjoittaja: ${author}`}
    </li>
  )
}

const Audio = ({ id, name, creator, url }) => {
  return (
    <li id={id}>
      {`Otsikko: ${name} - ${creator}`}
    </li>
  )
}

export default List
