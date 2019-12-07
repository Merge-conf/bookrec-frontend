import React from 'react'
import AudioPlayer from "react-h5-audio-player"

const Player = ({ url }) => (
  <AudioPlayer
    autoPlay
    src={url}
  />
)

export default Player
