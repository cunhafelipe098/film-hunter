import { useState } from 'react';
import { MovieType } from '.';
import { api } from '../../../../components/Api'
import './movieDetails.scss';

import { 
    Title,
    Text,
    Label,
    RatingIndicator,
    Button,
    IllustratedMessage,
    MessageStrip
} from '@ui5/webcomponents-react';

type props = {
    movie: MovieType | undefined
}

const CREATED = 201;
const NOT_APLICAVLE = 'N/A'

function MovieDetails({ movie }: props) {
    const [notification, setNotification] = useState(false);
    const favoriteMovie = async () => {
        const response = await api.post(`/favorite`, movie);
        if (response.status === CREATED) {
            setNotification(true);
            showNotification()
        }
    }

    const showNotification = async () => {
        setTimeout(() => {
          setNotification(false);
        }, 5000);
    };

    const closeNotification = async () => {
        setNotification(false);
    };

    return !movie ? <IllustratedMessage style={{ height: '400px' }}/> : (
        
        <div className='movie-detail-container'>
            <div className='info-container'>
            
                <Title wrappingType="Normal">{movie.title}</Title>
                { movie.plot !== NOT_APLICAVLE && <Text>{movie.plot}</Text> }

                <div>
                    {movie.actors !== NOT_APLICAVLE && (
                        <div className='label-container'>
                            <Label>
                                <strong>Actor</strong>
                            </Label>
                            <Text>{movie.actors}</Text>
                        </div>
                    )}
                    <div className='label-container'>
                        <Label>
                            <strong>Review</strong>
                        </Label>
                        <RatingIndicator value={movie.rating/2}/>
                    </div>
                </div>
                <div>
                    <Button
                        icon="heart"
                        iconEnd
                        onClick={favoriteMovie}
                        design="Attention"
                    >
                        Favorite
                    </Button>
                    {notification ? (
                            <MessageStrip className='messageStrip' design='Positive' onClose={closeNotification}>
                                Saved as favorite
                            </MessageStrip>
                        ) : ''
                    }
                </div>
            </div>

            <div>
                { movie.poster !== NOT_APLICAVLE  && <img src={movie.poster} alt="movie poster"/> }
            </div>
        </div>
    )
    
}
  
export default MovieDetails
  