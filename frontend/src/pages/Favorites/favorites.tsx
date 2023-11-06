
import { useEffect, useState } from 'react';

import { api } from '../../components/Api'
import { 
  Title
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';

import FavoriteSkeleton from './components/favoriteSkeleton';
import CardMovie, { MovieType } from './components/cardMovie';

import './favorite.scss'

function Favorite() {
  const [loading, setLoading] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => setLoading(false), [favoriteMovies]);

  useEffect(() => {
    setLoading(true);
      //setTimeout just to be able to understand skeleton/placehold loading
      setTimeout(async () => {
        const response = await api.get(`/movie`);
        setFavoriteMovies(response.data);
      }, 3000);
  }, []);

  return (
    <>
      <Title>
        List of Favorite
      </Title>

      <div className='favorite-page-container'>
      {
        loading ? Array.from({ length: 6 }, () => (
          <FavoriteSkeleton/>
        )) : favoriteMovies.map((movie: MovieType) => {
              return <CardMovie key={movie.id} {...movie}/>
          })
      }
      </div>
    </>
  )
}
  
export default Favorite
  