import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_THE_MOVIE_DB_TOKEN}`,
  },
})

const get = async <T>(url: string, params?: T) => {
  return await axiosInstance({
    method: 'GET',
    url,
    params,
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
