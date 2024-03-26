import React from 'react'
import { ImgCDN_URL } from '../utils/constants'

const MovieDetailMainContainer = ( {movieInfo,trailer}) => {

    const { poster_path ,overview , popularity} = movieInfo
  return (
    <div className=' p-4 mt-4  flex  w-full   '>
    <img className='relative w-[20%] '
     alt="movie_img" src={ImgCDN_URL + poster_path}></img> 

    <iframe className=" aspect-video w-full "
   src={"https://www.youtube.com/embed/"+ trailer?.key +"?si=V5gdkrMU5hVB6rtt&amp;start=3&autoplay=1&mute=1"}
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
 ></iframe> 

 <div className=' p-2 pl-6 w-[40%] '>
   <h2 className='text-5xl text-netred font-bold tracking-widest mb-2'>Overview</h2>
   <div className='h-2 w-[80%] bg-offwhite mb-4'></div>
   <p className='w-full text-offwhite pr-8'>{overview}</p>
  <button className='px-4 py-2 bg-red-600 font-medium text-offwhite mt-4 rounded-3xl'>Popularity : {popularity}</button>
 </div>
 </div> 
  )
}

export default MovieDetailMainContainer