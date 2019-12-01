import React from 'react'

const List = ({ items, filter, checkFilter, setInEdit }) => {
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
<<<<<<< HEAD
    if (item.author) return <BookRec key={item.id} item={item} setInEdit={setInEdit} />
    if (item.creator && item.url) return <AudioRec key={item.id} item={item} setInEdit={setInEdit} />
=======
    if (item.author) return <BookRec key={item.id} name={item.name} author={item.author} />
    if (item.url) return <AudioRec key={item.id} name={item.name} creator={item.creator} url={item.url} />
>>>>>>> ced879d967ed28b4998a74b26679deb54fc109b0
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


const BookRec = ({ item, setInEdit }) => (
  <li>
    {`Name: ${item.name}, `}
    {`Author: ${item.author}`}
    <button type="button" onClick={() => setInEdit(item)}>edit</button>
  </li>
)

const AudioRec = ({ item, setInEdit }) => (
  <li>
    {`Title: ${item.name} - ${item.creator}`}
    <button type="button" onClick={() => new Audio(item.url).play()}>play</button>
    <button type="button" onClick={() => setInEdit(item)}>edit</button>
  </li>
)

export default List
