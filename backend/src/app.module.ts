import { Module } from '@nestjs/common';
import { FavoriteModule } from './favorite/favorite.module';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FavoriteModule, MovieModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
