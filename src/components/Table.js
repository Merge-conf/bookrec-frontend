import React from 'react'
import DataTable from 'react-data-table-component'

const Table = ({ title, data, columns }) => {
  return (
    <DataTable selectableRows title={title} columns={columns} data={data} />
  )
}

export default Table
