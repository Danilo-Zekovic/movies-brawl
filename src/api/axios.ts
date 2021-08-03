import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_THE_MOVIE_DB_TOKEN}`,
  },
})

const get = async (url: string) => {
  return await axiosInstance({
    method: 'GET',
    url,
  })
    .then(({ data }) => {
      return { data, error: null }
    })
    .catch((error) => {
      return {
        error,
        data: null,
      }
    })
}

export { get }
export default axiosInstance
