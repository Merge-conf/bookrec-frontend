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

const update = async (track, id) => {
  const res = await axios.put(`${url}/${id}`, track)
  return res.data
}

const uploadFile = async (file) => {
  const data = new FormData()
  data.append('track', file)
  const res = await axios.post(uploadUrl, data)
  return res.data.url
}

export default { getAll, create, uploadFile, update }
