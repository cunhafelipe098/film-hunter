import Skeleton from '../../../../components/Skeleton';
import { MovieType } from '.';
import './movieDetails.scss';

import { 
    Title, 
    Text,
    Label,
    RatingIndicator,
    Button,
    IllustratedMessage
} from '@ui5/webcomponents-react';

type props = {
    movie: MovieType | undefined
}

function MovieDetails({ movie }: props) {
    if (!movie) {
        return <IllustratedMessage style={{ height: '400px' }}/>
    }

    return (
        <div className='movie-detail-container'>
            <div className='info-container'>
                <Title>{movie.title}</Title>
                <Text>{movie.plot}</Text>

                <div>
                    <div className='label-container'>
                        <Label>
                            <strong>Actor</strong>
                        </Label>
                        <Text>{movie.actors}</Text>
                    </div>
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
                        onClick={function Ta(){}}
                        design="Attention"
                    >
                        Favorite
                    </Button>
                </div>
            </div>

            <div>
                <img src={movie.poster} alt="movie poster"/>
            </div>
        </div>
    )
    
}
  
export default MovieDetails
  