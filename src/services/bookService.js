import axios from 'axios'

const url = `${process.env.REACT_APP_API_URL}/books`

const getAll = () => {
  const request = axios.get(url)
  return request.then((res) => res.data)
}

const create = (book) => {
  const request = axios.post(url, book)
  return request.then((res) => res.data)
}

const update = async (book, id) => {
  const request = await axios.put(`${url}/${id}`, book)
  return request.data
}

const remove = async (id) => {
  const request = await axios.delete(`${url}/${id}`)
  return request.data
}

export default { getAll, create, update, remove }
