import { useContext } from 'react'
import { FavoritesContext } from './FavoritesProvider'

const useFavorites = () => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext)

  return {
    favorites,
    addFavorite,
    removeFavorite,
  }
}

export default useFavorites
