import React from 'react'

const BookList = ({ list }) => (
  <div>
    <ul>
      {list.map((book) => (
        <li key={book.id}>
          Kirjoittaja:
          {' '}
          {book.author}
          {'\n'}
          {' '}
          otsikko:
          {' '}
          {book.name}
        </li>
      ))}
    </ul>
  </div>
)

export default BookList
