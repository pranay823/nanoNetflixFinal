import React from 'react'
import { useSelector} from 'react-redux'
import useCreditsDetails from '../Hooks/useCreditsDetails'
import ActorsCard from './ActorsCard'
import useReviews from '../Hooks/useReviews'


const MoreDetailsContainer = () => {

    const movieInfo =  useSelector((store) => store.movies?.movieDetails)
    const actors = useSelector((store)=>store.movies?.movieActors)

    const { id} = movieInfo
    
   console.log(actors)

  useCreditsDetails(id)
  useReviews(id)
  
  
  
 

  return (
    <div>
      <div className=' p-4'>
      <h1 className='text-4xl text-offwhite tracking-widest my-4 font-semibold ml-4'>credits</h1>
     <div className='flex overflow-x-auto '>
      {actors?.map((actor)=>{
        return <ActorsCard profile_path={actor?.profile_path}  name={actor?.name} />
      })}
     </div>
     <h1 className='text-4xl text-offwhite tracking-widest my-4 font-semibold ml-'>Reviews</h1>
      <div className='bg-yellow-400'>
         
      </div>
      </div>
    </div>
  )
}

export default MoreDetailsContainer