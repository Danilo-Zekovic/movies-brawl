import { createContext, FC, useState } from 'react'

interface FavoritesState {
  favorites: Set<number>
  addFavorite: (movieId: number) => void
  removeFavorite: (movieId: number) => void
}

const defaultValues: FavoritesState = {
  favorites: new Set([]),
  addFavorite: () => undefined,
  removeFavorite: () => undefined,
}

const FavoritesContext = createContext<FavoritesState>(defaultValues)

const getDefaultValue = () => {
  const favorites = localStorage.getItem('favorites')

  if (favorites) {
    return new Set(favorites.split(',').map(Number))
  }

  return new Set([])
}

const FavoritesProvider: FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Set<number>>(getDefaultValue())

  const addFavorite = (movieId: number) => {
    console.log('addFavorites', movieId)

    const newFavorites = new Set(favorites).add(movieId)

    setFavorites(newFavorites)
    localStorage.setItem('favorites', Array.from(newFavorites).join(','))
  }

  const removeFavorite = (movieId: number) => {
    console.log('removeFavorites', movieId)
    const newFavorites = new Set(favorites)
    newFavorites.delete(movieId)

    setFavorites(newFavorites)
    localStorage.setItem('favorites', Array.from(newFavorites).join(','))
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext }
export default FavoritesProvider
