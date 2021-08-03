import { useState } from 'react'
import { get } from './axios'

const sortByOptions = [
  { value: 'release_date.asc', label: 'Release date ascending' },
  { value: 'release_date.desc', label: 'Release date descending' },
  { value: 'original_title.asc', label: 'Title ascending' },
  { value: 'original_title.desc', label: 'Title descending' },
]

type SortByOptions =
  | 'release_date.asc'
  | 'release_date.desc'
  | 'original_title.asc'
  | 'original_title.desc'

interface GetMovies {
  genres?: number[]
  year?: number
  sortBy?: SortByOptions
}

const useMovies = () => {
  const [movies, setMovies] = useState([])

  const getMovies = ({ genres, year, sortBy }: GetMovies) => {
    const params = {
      ...(genres?.length && { with_genres: genres.join(',') }),
      // filter by date is correctly implemented, but it seams that on API side is something funky happening
      // even on their website when you try the filter it returns mixed results
      ...(year && { 'release_date.gte': `${year}-01-01` }),
      ...(year && { 'release_date.lte': `${year}-12-31` }),
      ...(sortBy && { sort_by: sortBy }),
    }
    get('/discover/movie', params).then(({ data }) => {
      setMovies(data.results || [])
    })
  }

  const searchMovies = (query: string) => {
    const params = {
      ...(query && { query: query }),
    }
    get('/search/movie', params).then(({ data }) => {
      setMovies(data.results || [])
    })
  }

  return {
    movies,
    getMovies,
    searchMovies,
  }
}

export { sortByOptions }
export type { SortByOptions }
export default useMovies
