import React from 'react'
import MoviesCard from './MoviesCard'
import { Link } from 'react-router-dom'

const SearchSuggestion = ({title ,lang ,poster_path}) => {
  return (

   <Link to={"/movies/"+ title} > <div className='flex  justify-between mx-auto p-4 text-offwhite w-[400px] my-4 bg-black  opacity-90'>
     <h1 className='text-2xl '>{title} ({lang})</h1>
        <MoviesCard posterPath={poster_path} />
    </div></Link>

 
  )
}

export default SearchSuggestion