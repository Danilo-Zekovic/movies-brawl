import { FC, memo } from 'react'

import { Movie } from '../../types'
import { formatDate } from '../../utils'
import Button from '../Button'

import styles from './Card.module.css'
import logo from '../../logo.svg'

interface Props {
  movie: Movie
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  isFavorite: boolean
}

const Card: FC<Props> = ({
  movie,
  addFavorite,
  removeFavorite,
  isFavorite,
}) => {
  const handleAddFavorite = () => {
    addFavorite(movie.id)
  }

  const handleRemoveFavorite = () => {
    removeFavorite(movie.id)
  }

  return (
    <div className={styles['card']}>
      <div className={styles['card-image']}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
          />
        ) : (
          <>
            <img src={logo} className={styles['logo-img']} alt="logo" />
            <span>Movie Poster Not Found</span>
          </>
        )}
      </div>
      <div className={styles['card-description']}>
        <h4 className={styles['card-title']}>{movie.title}</h4>
        <span>{formatDate(movie.release_date)}</span>
        {!isFavorite && (
          <Button onClick={handleAddFavorite} type="success">
            Favor
          </Button>
        )}
        {isFavorite && (
          <Button onClick={handleRemoveFavorite} type="warning">
            Disfavor
          </Button>
        )}
      </div>
    </div>
  )
}

export default memo(Card)
