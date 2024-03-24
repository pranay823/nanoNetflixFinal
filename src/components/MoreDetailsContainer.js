import React from 'react'
import { useSelector } from 'react-redux'


const MoreDetailsContainer = () => {

    const movieInfo =  useSelector((store) => store.movies?.movieDetails)

    const { adult } = movieInfo
  
  
 

  return (
    <div>
      <div className='bg-yellow-500 p-4'>
      <button className='px-4 py-2 bg-red-600 font-medium text-white'>{adult ? 'U': 'A'}</button>
    
      </div>
    </div>
  )
}

export default MoreDetailsContainer