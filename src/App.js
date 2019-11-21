import React, { useState, useEffect } from 'react';

const App = ({ booklist }) => {
  const [books, setBooks] = useState(booklist)
  return (
    <div>
      <ul>
        { books.map(book => <li>{book.name}</li>) }
      </ul>
    </div>
  )
}

export default App;
