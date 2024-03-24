
import { useSelector } from 'react-redux'
import {useParams } from 'react-router-dom'
import useIndividualTrailerVideos from '../Hooks/useIndividualTrailerVideos'
import useMovieDetails from '../Hooks/useMovieDetails'
import { logo_url } from '../utils/constants'
import MoreDetailsContainer from './MoreDetailsContainer'
import MovieDetailMainContainer from './MovieDetailMainContainer'
import ShimmerUI from './ShimmerUI'



const MoviesDetails = () => {
  const {movieTitle:movie} = useParams()
  const movieInfo =  useSelector((store) => store.movies?.movieDetails)

  const Trailer = useSelector((store)=> store.movies?.individualMovieTrailer)
  console.log(Trailer)

  useMovieDetails(movie)
  useIndividualTrailerVideos()





  if(!movieInfo || !Trailer ) return  <ShimmerUI />
  
 const { original_title,release_date , id} = movieInfo



  return (
    <div className='bg-bgcolor h-full'>
    
      <div className='flex md:justify-between flex-col md:flex-row  '>
      <img 
       className="w-44 mx-auto md:mx-0 "
        src={logo_url} alt="logo" >
        </img>
      </div>
      <div className='w-full h-full flex justify-between '>
       <h1 className='text-offwhite text-6xl font-semibold  tracking-widest'>{original_title}</h1>
       <div className='mr-4 mt-3'>
        <button className='px-4 py-2 bg-red-600 font-medium text-offwhite'>Release Date : {release_date}</button>
       </div>
      </div>
      <MovieDetailMainContainer movieInfo={movieInfo} trailer={Trailer}  />
      <MoreDetailsContainer   />
    </div>
  )
}

export default MoviesDetails