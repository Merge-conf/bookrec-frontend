import React from 'react'
import Button from './Button'

const play = () => {
  console.log('play')
}

const AudioList = ({ list }) => (
  <div>
    <Button text="play" handleClick={play} />
    <ul>
      {list.map((audio) => (
        <div key={audio.id}>
          <li>
            Otsikko:
            {' '}
            {audio.name}
            {audio.creator ? (
              <span>
                <br />
                Tekijä:
                {' '}
                {audio.creator}
              </span>
            ) : null}
          </li>
        </div>
      ))}
    </ul>
  </div>
)

export default AudioList
