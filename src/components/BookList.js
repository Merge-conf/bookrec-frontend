import React from 'react'

const BookList = ({ list }) => (
  <div>
    <ul>
      {list.map((book) => (
        <div className="book">
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
        </div>
      ))}
    </ul>
  </div>
)

export default BookList
