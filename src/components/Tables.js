import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Popup from 'reactjs-popup'

const Tables = ({ books, audio, filter }) => {
  const [editing, setEditing] = useState(false)
  const [inEdit, setInEdit] = useState(null)
  const bookColumns = [
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

  const audioColumns = [
    {
      name: 'creator',
      selector: 'creator',
      sortable: true,
    },
    {
      name: 'name',
      selector: 'name',
      sortable: true,
    },
  ]

  return (
    <div>
      <Table
        onClick={(item) => {
          setEditing(true)
          setInEdit(item)
        }}
        toggle={filter.books}
        title="Books"
        data={books}
        columns={bookColumns}
      />

      <Table
        onClick={(item) => {
          setEditing(true)
          setInEdit(item)
        }}
        toggle={filter.audio}
        title="Audio"
        data={audio}
        columns={audioColumns}
      />
    </div>
  )
}

const Table = ({ onClick, toggle, title, data, columns }) => {
  if (toggle) {
    return (
      <DataTable onRowClicked={onClick} selectableRows title={title} columns={columns} data={data} />
    )
  }
  return (<></>)
}

export default Tables
