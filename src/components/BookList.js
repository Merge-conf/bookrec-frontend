import React from 'react'

const BookList = ({ list }) => (
  <div>
    <ul>
      {list.map((book) => (
        <div className="book" key={book.id}>
          <li>
            Kirjoittaja:
            {' '}
            {book.author}
            <br />
            {' '}
            Otsikko:
            {' '}
            {book.name}
          </li>
        </div>
      ))}
    </ul>
  </div>
)

export default BookList
