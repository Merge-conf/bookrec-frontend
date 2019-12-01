import React from 'react'
import Button from './Button'

const List = ({ items, filter, checkFilter }) => {
  const filterItems = (list) => list.filter((item) => {
    const itemUpper = item.name.toUpperCase()
    const filterUpper = filter.toUpperCase()
    const isBook = Boolean(item.author)
    const isAudio = Boolean(item.url)
    if (isBook && !checkFilter.books) return false
    if (isAudio && !checkFilter.audio) return false
    return itemUpper.includes(filterUpper)
  })

  const mapItems = (list) => list.map((item) => {
    if (!item.name) return <li key={item.id}>no name</li>
    if (item.author) return <BookRec key={item.id} name={item.name} author={item.author} />
    if (item.url) return <AudioRec key={item.id} name={item.name} creator={item.creator} url={item.url} />
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


const BookRec = ({ id, name, author }) => (
  <li key={id}>
    {`Name: ${name}, `}
    {`Author: ${author}`}
  </li>
)

const AudioRec = ({
  id, name, creator, url,
}) => (
  <li key={id}>
    {`Title: ${name} - ${creator}`}
    <Button text="play" handleClick={() => {
      new Audio(url).play()
    }} />
  </li>
)

export default List
