import { Module } from '@nestjs/common';
import { FavoriteModule } from './favorite/favorite.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [FavoriteModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
