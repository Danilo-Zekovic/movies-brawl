import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useMovies } from '../../api'
import Card from '../../components/Card'
import CardContainer from '../../components/CardsContainer'
import Spinner from '../../components/Spinner'
import { useFavorites } from '../../providers/Favorites'

const FavoritesPage: FC = () => {
  const { getMoviesById, movies, loading } = useMovies()
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  useEffect(() => {
    getMoviesById(Array.from(favorites))
  }, [favorites, getMoviesById])

  const handleAddFavorite = (movieId: number) => {
    addFavorite(movieId)
  }

  const handleRemoveFavorite = (movieId: number) => {
    removeFavorite(movieId)
  }
  return (
    <div>
      <h1>So this is your list of favorites</h1>
      <CardContainer>
        {loading && <Spinner />}
        {!movies.length && !loading && (
          <h2>
            You haven&apos;t favored any movie. Go to the{' '}
            <Link to="/">movie list</Link> and select your favorite movies
          </h2>
        )}
        {!!movies.length &&
          !loading &&
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

export default FavoritesPage
