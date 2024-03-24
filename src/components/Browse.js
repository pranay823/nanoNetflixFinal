import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
   useNowPlayingMovies()
   usePopularMovies()
   useTopRatedMovies()
   useUpcomingMovies()

  return (
    <div>
        <Header /> 
       { showGptSearch ? <GptSearch /> : 
       <>
        <MainContainer />
        <SecondaryContainer />
       </>
      }
    </div>
  )
}

export default Browse; 