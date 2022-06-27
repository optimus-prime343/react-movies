import Image from 'next/image'
import { BsHeart } from 'react-icons/bs'

import { Movie } from '../../types/movie'
import { formatDate } from '../../utils/format-date'
import { getMovieImageUrl } from '../../utils/get-movie-image-url'
import NextLink from '../ui/next-link'
import { MovieRating } from './movie-rating'

interface MovieItemProps {
  movie: Movie
}
export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute right-4 top-4 z-10'>
          <BsHeart />
        </div>
        <Image
          src={getMovieImageUrl(movie.backdrop_path)}
          width={600}
          height={600}
          alt={`${movie.title} poster`}
          objectFit='cover'
          className='rounded-md group-hover:scale-105 transition-transform duration-700'
        />
      </div>
      <div className='flex justify-between items-center gap-2'>
        <div>
          <NextLink href={`/${movie.id}`}>
            <h3 className='text-lg font-medium'>{movie.title}</h3>
          </NextLink>
          <p className='text-sm mt-2 text-neutral-400'>
            {formatDate(movie.release_date)}
          </p>
        </div>
        <MovieRating voteAverage={movie.vote_average} />
      </div>
    </div>
  )
}