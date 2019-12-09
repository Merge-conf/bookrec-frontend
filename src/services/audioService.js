import axios from 'axios'

const url = `${process.env.REACT_APP_API_URL}/audios`
const uploadUrl = 'https://bookrec-file-hosting.herokuapp.com/api/add'

const getAll = () => {
  const request = axios.get(url)
  return request.then((res) => res.data)
}

const create = (track) => {
  const request = axios.post(url, track)
  return request.then((res) => res.data)
}

const update = async (track, id) => {
  const request = await axios.put(`${url}/${id}`, track)
  return request.data
}

const uploadFile = async (file) => {
  const data = new FormData()
  data.append('track', file)
  const request = await axios.post(uploadUrl, data)
  return request.data.url
}

const remove = async (audio) => {
  const request = await axios.delete(`${url}/${audio.id}`)
  axios.delete(audio.url)
  return request.data
}

export default { getAll, create, uploadFile, update, remove }
