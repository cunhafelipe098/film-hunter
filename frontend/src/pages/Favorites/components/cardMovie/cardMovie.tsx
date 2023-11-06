import { MovieType } from './Types';
import './cardMovie.scss';

import { 
    Title,
    RatingIndicator, ResponsiveGridLayout
} from '@ui5/webcomponents-react';


const NOT_APLICAVLE = 'N/A'

function CardMovie(movie : MovieType) {
    
    return  (
        <div className='card-movie-container'>
            <div>
                { movie.poster !== NOT_APLICAVLE  && <img src={movie.poster} alt="movie poster"/> }
            </div>
            <div>
                <RatingIndicator value={movie.rating/2}/>
                <ResponsiveGridLayout columnsM={1}>
                    <div style={{gridColumn: 'span 13'}}>
                        <Title wrappingType="None">{movie.title}</Title>
                    </div>
                </ResponsiveGridLayout> 
            </div>
        </div>
    )
}
  
export default CardMovie
  