import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Popup from 'reactjs-popup'
import audioService from '../../services/audioService'
import Player from '../Player'
import { StyledInput, StyledButton, StyledModal } from '../Styles'

const AudioTable = ({ setData, data, render }) => {
  const [name, setName] = useState('')
  const [creator, setCreator] = useState('')
  const [inEdit, setInEdit] = useState(null)
  const [url, setUrl] = useState('')
  const columns = [
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

  if (!render) return null

  const edit = (event) => {
    event.preventDefault()
    const newAudio = {
      ...inEdit,
      name,
      creator,
    }
    audioService.update(newAudio, inEdit.id)
      .then((updated) => {
        const newData = data.map((audio) => {
          if (audio === inEdit) return updated
          return audio
        })
        setData(newData)
      })
    setInEdit(null)
    setName('')
    setCreator('')
  }

  return (
    <div>
      <Popup modal open={Boolean(inEdit)} onClose={() => setInEdit(null)}>
        <StyledModal>
          <form onSubmit={edit}>
            <StyledInput type="text" placeholder="New Name" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <StyledInput type="text" placeholder="New Creator" value={creator} onChange={(event) => setCreator(event.target.value)} />
            <br />
            <StyledButton type="submit">Save</StyledButton>
          </form>
        </StyledModal>
      </Popup>
      <DataTable
        onRowDoubleClicked={(item) => setInEdit(item)}
        selectableRows
        title="Audio (click to play)"
        columns={columns}
        data={data}
        onRowClicked={(item) => setUrl(item.url)}
      />
      <Player url={url} />
    </div>
  )
}

export default AudioTable
