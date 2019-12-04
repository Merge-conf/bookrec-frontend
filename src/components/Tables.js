import React from 'react'
import DataTable from 'react-data-table-component'

const Tables = ({ books, audio, filter }) => {
  const bookColumns = [
    {
      name: 'author',
      selector: 'author',
      sortable: true
    },
    {
      name: 'name',
      selector: 'name',
      sortable: true
    }
  ]

  const audioColumns = [
    {
      name: 'creator',
      selector: 'creator',
      sortable: true
    },
    {
      name: 'name',
      selector: 'name',
      sortable: true
    }
  ]

  return (
    <div>

      <Table toggle={filter.books} title="Books" data={books} columns={bookColumns} />
      <Table toggle={filter.audio} title="Audio" data={audio} columns={audioColumns} />
    </div>
  )
}

const Table = ({ toggle, title, data, columns }) => {
  if (toggle) {
    return (
      <DataTable selectableRows title={title} columns={columns} data={data} />
    )
  }
  return (<></>)
}

export default Tables