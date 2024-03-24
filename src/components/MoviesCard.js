import React from 'react'
import { ImgCDN_URL } from '../utils/constants'

const MoviesCard = ({posterPath}) => {
  if(!posterPath) return
  return (
    <div className='md:w-48 w-28 p-2 '>
    <img 
     alt="" src={ImgCDN_URL + posterPath}></img>
    </div>
  )
}

export default MoviesCard

