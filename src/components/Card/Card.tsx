import { FC, memo } from 'react'

import { Movie } from '../../types'
import Button from '../Button'

import styles from './Card.module.css'

interface Props {
  movie: Movie
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  isFavorite: boolean
}
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

// return example Aug 8, 2021
const formatDate = (date: string) => {
  const rawDate = new Date(date)

  const month = months[rawDate.getMonth()]
  const day = rawDate.getDate()
  const year = rawDate.getFullYear()

  return `${month} ${day}, ${year}`
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
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`Poster for ${movie.title}`}
        />
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
