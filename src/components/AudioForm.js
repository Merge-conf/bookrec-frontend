import React, { useState } from 'react'
import audioService from '../services/audioService'

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
          <Input text="Name: " set={setName} id="audioName" />
          <Input text="Creator: " set={setCreator} id="audioCreator" />
          <input
            id="audioFile"
            type="file"
            onChange={(event) => setAudioFile(event.target.files[0])}
            accept=".mp3, .mpeg4, .wav"
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

const Input = ({ text, set, id }) => (
  <div>
    {text}
    <input id={id} type="text" onChange={(event) => set(event.target.value)} />
  </div>
)

export default AudioForm
