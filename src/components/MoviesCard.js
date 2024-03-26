import React from 'react'
import { ImgCDN_URL } from '../utils/constants'

const MoviesCard = ({posterPath}) => {
  console.log(posterPath)
  if(!posterPath) return
  console.log(posterPath)

  return (
    <div className='md:w-48 w-28 p-2  '>
    <img  
     alt="pp" src={ImgCDN_URL+ posterPath}></img>
    </div>
  )
}

export default MoviesCard

