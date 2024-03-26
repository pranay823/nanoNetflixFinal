
import { useSelector } from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom'
import useIndividualTrailerVideos from '../Hooks/useIndividualTrailerVideos'
import useMovieDetails from '../Hooks/useMovieDetails'
import { logo_url } from '../utils/constants'
import MoreDetailsContainer from './MoreDetailsContainer'
import MovieDetailMainContainer from './MovieDetailMainContainer'
import ShimmerUI from './ShimmerUI'



const MoviesDetails = () => {
  const navigate = useNavigate()
  const {movieTitle:movie} = useParams()
  const movieInfo =  useSelector((store) => store.movies?.movieDetails)

  const Trailer = useSelector((store)=> store.movies?.individualMovieTrailer)


  useMovieDetails(movie)
  useIndividualTrailerVideos()

   const homepageClickHandler =()=>{
    navigate('/browse')
   }


  if(!movieInfo || !Trailer ) return  <ShimmerUI />
  
 const { original_title,release_date , id, adult , original_language} = movieInfo



  return (
    <div className='bg-bgcolor h-full'>
    
      <div className='flex md:justify-between flex-col md:flex-row  '>
      <img 
       className="w-44 mx-auto md:mx-0 "
        src={logo_url} alt="logo" >
        </img>
        <button onClick={homepageClickHandler}
         className=' bg-netred font-medium text-offwhite mx-4 my-8 px-4 '>Homepage</button>
      </div>
      <div className='w-full h-full flex justify-between '>
       <h1 className='ml-4 text-offwhite text-6xl font-semibold  tracking-widest'>{original_title}</h1>
       <div className='mr-4 mt-3'>
       <button className='px-4 py-2 bg-red-600 font-medium text-white rounded-full'>{adult ? 'U': 'A'}</button>
      <button className='px-4 py-2 bg-red-600 font-medium text-white ml-4 rounded-3xl'>{ original_language}</button>
        <button className='px-4 py-2 bg-red-600 font-medium text-offwhite mx-4 rounded-3xl'>Release Date : {release_date}</button>
       </div>
      </div>
      <MovieDetailMainContainer movieInfo={movieInfo} trailer={Trailer}  />
      <MoreDetailsContainer   />
    </div>
  )
}

export default MoviesDetails