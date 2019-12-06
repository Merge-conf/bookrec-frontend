import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Popup from 'reactjs-popup'
import bookService from '../../services/bookService'

const BookTable = ({ setData, data, render }) => {
  const [inEdit, setInEdit] = useState(null)
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const columns = [
    {
      name: 'author',
      selector: 'author',
      sortable: true,
    },
    {
      name: 'name',
      selector: 'name',
      sortable: true,
    },
  ]

  if (!render) return null

  const edit = (event) => {
    event.preventDefault()
    const newBook = {
      ...inEdit,
      name,
      author,
    }
    bookService.update(newBook, inEdit.id)
      .then((updated) => {
        const newData = data.map((book) => {
          if (book === inEdit) return updated
          return book
        })
        setData(newData)
      })
    setInEdit(null)
    setName('')
    setAuthor('')
  }
  return (
    <div>
      <Popup modal open={Boolean(inEdit)} onClose={() => setInEdit(null)}>
        <form onSubmit={edit}>
          New Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          <br />
          New Author:
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
          <br />
          <button type="submit">edit</button>
        </form>
      </Popup>
      <DataTable onRowClicked={(item) => setInEdit(item)} selectableRows title="Books" columns={columns} data={data} />
    </div>
  )
}

export default BookTable
