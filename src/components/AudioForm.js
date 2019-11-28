import React, { useState } from 'react'

// const onChange = (event) => {
//   console.log(event.target.files[0])
// }

const AudioForm = () => {
  const [creator, setCreator] = useState('')
  const [name, setName] = useState('')
  const [audioFile, setAudioFile] = useState([])

  const addAudio = (event) => {
    event.preventDefault()
    console.log(creator)
    console.log(name)
    console.log(audioFile)
  }

  
  return (
    <div>
      <form onSubmit={addAudio}>
        <div>
          <Input text="Name: " set={setName} id="audioName" />
          <Input text="Creator: " set={setCreator} id="authorName" />
          <InputAudio set={setAudioFile} id="audioFile" />
        </div>
        <button type="submit">Upload</button>
      </form>
  </div>
)}

const Input = ({ text, set, id }) => (
  <div>
    {text}
    <input id={id} type="text" onChange={(event) => set(event.target.value)} />
  </div>
)

const InputAudio = ({ set, id }) => (
  <div>
    <input id={id} type="file" onChange={(event) => set(event.target.files[0])} />
  </div>
)


export default AudioForm
