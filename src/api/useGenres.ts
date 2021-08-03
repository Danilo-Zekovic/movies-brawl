import { useEffect, useState } from 'react'
import { get } from './axios'

const useGenres = () => {
  const [genres, setGenres] = useState([])
  useEffect(() => {
    get('/genre/movie/list').then(({ data }) => {
      setGenres(data.genres)
    })
  }, [])

  return {
    genres,
  }
}

export default useGenres
