import React, { useState } from 'react'

const EditForm = ({ items, setItems, inEdit, setInEdit }) => {
  const [newName, setNewName] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newCreator, setNewCreator] = useState('')
  const [newUrl, setNewUrl] = useState('')

  if (!inEdit) return <div />
  const isBook = Boolean(inEdit.author)
  const isAudio = Boolean(inEdit.creator && inEdit.url)
  const editAudio = () => {
    const newList = items.map((item) => {
      if (item === inEdit) {
        return {
          ...item,
          name: newName,
          creator: newCreator,
          url: newUrl,
        }
      }
      return item
    })
    setItems(newList)
    setInEdit(null)
    setNewName('')
    setNewCreator('')
    setNewUrl('')
  }
  const editBook = () => {
    const newList = items.map((item) => {
      if (item === inEdit) {
        return {
          ...item,
          name: newName,
          autho: newAuthor,
        }
      }
      return item
    })
    setItems(newList)
    setInEdit(null)
    setNewName('')
    setNewAuthor('')
  }

  if (isBook) {
    return (
      <form onSubmit={editBook}>
        <Input value={newName} set={setNewName} />
        <Input value={newAuthor} set={setNewAuthor} />
        <button type="submit">edit</button>
        <button type="button" onClick={() => setInEdit(null)}>cancel</button>
      </form>
    )
  }

  if (isAudio) {
    return (
      <form onSubmit={editAudio}>
        <Input label="name" value={newName} set={setNewName} />
        <Input label="creator" value={newCreator} set={setNewCreator} />
        <Input label="url" value={newUrl} set={setNewUrl} />
        <button type="submit">edit</button>
        <button type="button" onClick={() => setInEdit(null)}>cancel</button>
      </form>
    )
  }
  return <div />
}

const Input = ({ label, value, set }) => {
  return (
    <div>
      {`${label}: `}
      <input type="text" value={value} onChange={(event) => set(event.target.value)} />
    </div>
  )
}

export default EditForm
