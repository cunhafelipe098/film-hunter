
import FavoriteSkeleton from './components/favoriteSkeleton';
import { 
  Title
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';

import './favorite.scss'

function Favorite() {

  return (
    <>
      <Title>
        List of Favorite Movies
      </Title>

      <FavoriteSkeleton/>
    </>
  )
  }
  
  export default Favorite
  