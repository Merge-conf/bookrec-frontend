let books = []

const create = (newBook) => {
  const book = { id: '3', ...newBook }
  books = books.concat(book)
  return Promise.resolve(book)
}

export default { create }
