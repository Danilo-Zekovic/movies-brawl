import { useEffect, useState } from 'react'
import { get } from './axios'

const usePopular = () => {
  const [popular, setPopular] = useState([])
  useEffect(() => {
    get('/movie/popular').then(({ data }) => {
      setPopular(data.results)
    })
  }, [])

  return {
    popular,
  }
}

export default usePopular
