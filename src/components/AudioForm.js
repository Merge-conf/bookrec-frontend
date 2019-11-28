import React from 'react'

// const onChange = (event) => {
//   console.log(event.target.files[0])
// }

const AudioForm = ({
  addAudio, setAudioAuthor, setAudioName, setAudioFile,
}) => (
  <div>
    <form onSubmit={addAudio}>
      <div>
        <Input text="Name: " set={setAudioName} id="audioName" />
        <Input text="Author: " set={setAudioAuthor} id="authorName" />
        <InputAudio set={setAudioFile} id="audioFile" />
      </div>
      <button type="submit">upload</button>
    </form>
  </div>
)

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
