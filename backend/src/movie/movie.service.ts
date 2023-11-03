import { ForbiddenException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieDto } from './dto/movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovieService {
  private baseUrl = 'http://www.omdbapi.com/';

  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.movie.findMany();
}

  async getByTitle(title: string): Promise<MovieDto> {
    const params = {
      t: title,
      apiKey: 'e4d60a0b',
    };

    try {
      const response = await axios.get(this.baseUrl, { params });
      
      if (!response.data || response.data.Error) {
        throw new ForbiddenException(
          'favorite not found',
      );
      }
  
      const movie: MovieDto = {
        title: response.data.Title,
        plot: response.data.Plot,
        poster: response.data.Poster,
        actors: response.data.Actors,
        rating: response.data.imdbRating,
        awards: response.data.Awards,
      };
      
      return movie;

    } catch (error) {
      throw new Error('Failed to fetch data from OMDB API');
    }
  }
}
