import { useEffect } from "react"
import { Api_Options } from "../utils/constants"


const useReviews = (id) => {
 
const getReviews=async()=>{

const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,Api_Options)
const json = await data.json()
console.log(json)

}

useEffect(()=>{
getReviews()
},[])
}

export default useReviews