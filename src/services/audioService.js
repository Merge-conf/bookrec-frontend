import axios from 'axios'

const url = `${process.env.REACT_APP_API_URL}/audios`

const getAll = () => {
  const req = axios.get(url)
  return req.then((res) => res.data)
}

const create = (book) => {
  const req = axios.post(url, book)
  return req.then((res) => res.data)
}

export default { getAll, create }
