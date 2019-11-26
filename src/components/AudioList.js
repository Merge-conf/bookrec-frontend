import React from 'react'

const AudioList = ({ list }) => (
  <div>
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
