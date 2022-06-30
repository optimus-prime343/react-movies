import { createContext, useContext } from 'react'

import { Movie } from '../../types/movie'

interface MovieContext {
  favoriteMovies: Movie[]
  addFavoriteMovie: (movie: Movie) => void
  removeFavoriteMovie: (movieId: number) => void
}
export const MovieContext = createContext<MovieContext>({} as MovieContext)

export const useMovies = () => useContext(MovieContext)
