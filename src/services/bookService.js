import axios from 'axios'

const url = 'http://localhost:3001/books'

const getAll = () => {
  const req = axios.get(url)
  return req.then((res) => res.data)
}

const create = (book) => {
  const req = axios.post(url, book)
  return req.then((res) => res.data)
}

export default { getAll, create }
