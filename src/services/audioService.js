import axios from 'axios'

const url = `${process.env.REACT_APP_API_URL}/audios`
const uploadUrl = 'https://bookrec-file-hosting.herokuapp.com/api/add'

const getAll = () => {
  const req = axios.get(url)
  return req.then((res) => res.data)
}

const create = (track) => {
  const req = axios.post(url, track)
  return req.then((res) => res.data)
}

const uploadFile = ({ file }) => {
  const req = axios.post(uploadUrl, file)
  return req.then((res) => res.data)
}

export default { getAll, create, uploadFile }
