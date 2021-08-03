import { ChangeEvent, FC, useEffect, useState } from 'react'
import Select from 'react-select'

import {
  useGenres,
  useMovies,
  usePopular,
  sortByOptions,
  SortByOptions,
} from '../../api'
import Button from '../../components/Button'
import Card from '../../components/Card'
import CardContainer from '../../components/CardsContainer'
import { useFavorites } from '../../providers/Favorites'
import { Movie } from '../../types'
import { prepareValuesForDropdown, yearsAsDropdownOptions } from '../../utils'

import styles from './HomePage.module.css'

const HomePage: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedGenres, setSelectedGenres] = useState<number[]>([])
  const [selectedYear, setSelectedYear] = useState<number>()
  const [selectedSortBy, setSelectedSortBy] = useState<SortByOptions>()
  const [searchTerm, setSearchTerm] = useState('')
  const { popular } = usePopular()
  const { genres } = useGenres()

  const { getMovies, movies: searchedMovies, searchMovies } = useMovies()

  useEffect(() => {
    setMovies(popular)
  }, [popular])

  useEffect(() => {
    setMovies(searchedMovies)
  }, [searchedMovies])

  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const handleAddFavorite = (movieId: number) => {
    addFavorite(movieId)
  }

  const handleRemoveFavorite = (movieId: number) => {
    removeFavorite(movieId)
  }

  const handleClick = async () => {
    getMovies({
      genres: selectedGenres,
      year: selectedYear,
      sortBy: selectedSortBy,
    })
  }

  const handleGenreSelect = (
    selectedOptions: { value: number; label: string }[],
  ) => {
    const selectedIds = selectedOptions.map(({ value }) => value)
    setSelectedGenres(selectedIds)
  }

  const handleYearSelect = (
    selected: { value: number; label: number } | null,
  ) => {
    setSelectedYear(selected?.value)
  }

  const handleSortBySelect = (selected: {
    value: SortByOptions
    label: string
  }) => {
    setSelectedSortBy(selected?.value)
  }

  const handleSearchTermChange = (search: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(search.target.value as string)
  }

  const handleSearch = () => {
    searchMovies(searchTerm)
  }

  return (
    <div>
      <h1>Colosseum for Movies</h1>
      <h3>Which one will find its way to your hart and favorites!</h3>
      <div className={styles['filter-and-sort']}>
        <Select
          options={prepareValuesForDropdown(genres, 'id', 'name')}
          isSearchable
          isClearable
          isMulti
          // @ts-ignore
          onChange={handleGenreSelect}
          className={styles['react-select']}
        />
        <Select
          options={yearsAsDropdownOptions()}
          isSearchable
          isClearable
          // @ts-ignore
          onChange={handleYearSelect}
          className={styles['react-select']}
        />
        <Select
          options={sortByOptions}
          isSearchable
          isClearable
          // @ts-ignore
          onChange={handleSortBySelect}
          className={styles['react-select']}
        />
      </div>
      <Button onClick={handleClick}>Filter</Button>

      <div className={styles['filter-and-sort']}>
        <input
          type="text"
          onChange={handleSearchTermChange}
          name="search"
          className={styles['input']}
          placeholder="Search term..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <CardContainer>
        {!!movies.length &&
          movies.map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              addFavorite={handleAddFavorite}
              removeFavorite={handleRemoveFavorite}
              isFavorite={favorites.has(movie.id)}
            />
          ))}
      </CardContainer>
    </div>
  )
}

export default HomePage
