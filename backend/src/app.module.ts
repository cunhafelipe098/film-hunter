import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FavoriteModule } from './favorite/favorite.module';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    FavoriteModule, 
    MovieModule, 
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
