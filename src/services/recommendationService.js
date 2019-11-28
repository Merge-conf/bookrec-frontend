
import axios from 'axios'

const bookUrl = `${process.env.REACT_APP_API_URL}/books`
const audioUrl = `${process.env.REACT_APP_API_URL}/audios`

const getAll = async () => {
  const bookReq = await axios.get(bookUrl)
  const audioReq = await axios.get(audioUrl)
  return bookReq.data.concat(audioReq.data)
}

export default { getAll }
