import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('')
  async getAll() {
      return this.movieService.getAll();
  }

  @Get(':title')
  async getByTitle(@Param('title') title: string) {
      return this.movieService.getByTitle(title);
  }
}
