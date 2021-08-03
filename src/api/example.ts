import axiosInstance, { get } from './axios'

export const callExample = () => {
  axiosInstance({
    method: 'GET',
    url: 'discover/movie',
    params: { with_genres: '28,12' },
  }).then((response) => {
    console.log(response)
  })
}

export const getPopular = async () => {
  return await get('/movie/popular')
}
