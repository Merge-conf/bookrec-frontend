import axios from 'axios'

const url = `${process.env.REACT_APP_API_URL}/books`

const getAll = () => {
  const req = axios.get(url)
  return req.then((res) => res.data)
}

const create = (book) => {
  const req = axios.post(url, book)
  return req.then((res) => res.data)
}

const update = async (book, id) => {
  const res = await axios.put(`${url}/${id}`, book)
  return res.data
}

export default { getAll, create, update }
