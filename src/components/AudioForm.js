import React, { useState } from 'react'
import styled from 'styled-components'
import audioService from '../services/audioService'
import { StyledInput, StyledButton } from './Styles'

const AudioForm = ({ items, setItems, setType }) => {
  const [creator, setCreator] = useState('')
  const [name, setName] = useState('')
  const [audioFile, setAudioFile] = useState([])

  const addAudio = async (event) => {
    event.preventDefault()
    const url = await audioService.uploadFile(audioFile)
    const newAudio = {
      name,
      creator,
      url,
    }
    const savedAudio = await audioService.create(newAudio)
    setItems(items.concat(savedAudio))
    setName('')
    setCreator('')
    setType('')
  }


  return (
    <div>
      <form onSubmit={addAudio}>
        <div>
          <Input text="Name" set={setName} id="audioName" />
          <Input text="Creator" set={setCreator} id="audioCreator" />
          <FileUpload
            id="audioFile"
            type="file"
            onChange={(event) => setAudioFile(event.target.files[0])}
            accept=".mp3, .mpeg4, .wav"
          />
        </div>
        <StyledButton type="submit">Upload</StyledButton>
      </form>
    </div>
  )
}

const Input = ({ text, set, id }) => (
  <div>
    <StyledInput id={id} placeholder={text} type="text" onChange={(event) => set(event.target.value)} />
  </div>
)

const FileUpload = styled.input`
  margin-top: 8px;
`

export default AudioForm
