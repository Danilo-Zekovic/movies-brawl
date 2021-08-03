import { FC, useEffect, useState } from 'react'
import { getPopular } from '../../api/example'
import useGenres from '../../api/useGenres'
import usePopular from '../../api/usePopular'
import Card from '../../components/Card'
import CardContainer from '../../components/CardsContainer'
import { useFavorites } from '../../providers/Favorites'
import { Movie } from '../../types'

const HomePage: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const { popular } = usePopular()
  const { genres } = useGenres()

  useEffect(() => {
    setMovies(popular)
  }, [popular])

  useEffect(() => {
    console.log('genres', genres)
  }, [genres])

  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const handleAddFavorite = (movieId: number) => {
    addFavorite(movieId)
  }

  const handleRemoveFavorite = (movieId: number) => {
    removeFavorite(movieId)
  }

  const handleClick = async () => {
    const foo = await getPopular()
    setMovies(foo.data.results)
  }
  return (
    <div>
      <h1>Colosseum for Movies</h1>
      <h3>Which one will find its way to your hart and favorites!</h3>
      <button onClick={handleClick}>Call</button>
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
