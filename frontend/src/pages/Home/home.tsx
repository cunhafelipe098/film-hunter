
import { useState, useEffect } from 'react';
import HomeSkeleton from './components/HomeSkeleton';
import MovieDetails, { MovieType } from './components/MovieDetails';

import { api } from '../../components/Api'
import './home.scss'

import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import { 
  Title, 
  Text,
  Input,
  Button, 
  IllustratedMessage
} from '@ui5/webcomponents-react';

function Home() {

  const [loading, setLoading] = useState(true);
  const [movieTitle, setMovieTitle] = useState('');
  const [movie, setMovie] = useState<MovieType | undefined>(undefined);

  const handleInputChange = (event: any) => {
    setMovieTitle(event.target.value);
  };

  useEffect(() => {
    setLoading(false);
  }, [movie]);

  const searchMovie = async () => {
    if (movieTitle.length > 2) {
      setLoading(true);
      await setTimeout(async () => {
        const response = await api.get(`/movie/:${movieTitle}`);
        setMovie(response.data);
      }, 3000);
      setMovieTitle('');
    }
  }

  return (
    <>
      <Title>
        Film Hunter
      </Title>

      <Text
        style={{margin: '2rem'}}
      >
        This option denotes a powerful tool for users to explore and discover movies. It functions as an efficient and robust search system that allows users to find and retrieve information about movies, making the process of searching for films straightforward and effective. It's like a specialized engine designed to help users search for, filter, and access movie-related data, providing a comprehensive and user-friendly experience.
      </Text>
      <div className="search-container">
        <div>
          <Input
            onChange={handleInputChange}
            onInput={function Ta(){}}
            onSuggestionItemPreview={function Ta(){}}
            onSuggestionItemSelect={function Ta(){}}
            placeholder='Enter movie title'
            value={movieTitle}
            style={{
              width: '50vw',
              maxWidth: '60rem'
            }}
          />
        </div>
        <div className="buttons-container">
          <Button
            design="Emphasized"
            onClick={searchMovie}
            style={{marginLeft: '1rem', marginRight: '1rem'}}
          >
            Search
          </Button>

          <Button
            design="Default"
            onClick={function Ta(){}}
          >
            Reset
          </Button>

        </div>
      </div>
      {
        loading ? <HomeSkeleton/> : <MovieDetails movie={movie}/>
      }
      {/* <IllustratedMessage style={{ height: '400px' }}/> */}
    </>
  )
}

export default Home
