import { Injectable } from "@nestjs/common";
import { Favorite, Movie } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
import { MovieDto } from "./dto";

@Injectable()
export class FavoriteService {
    constructor(private prisma: PrismaService) {}

    async markAsFavorite(dto: MovieDto) {

        const movie = await this.prisma.movie.create({
            data: { ...dto }
        });
        const favorite = await this.prisma.favorite.create({
            data:{
                 movieId: movie.id   
            }
        });
        return {movie, favorite};
    };

    unmarkAsFavorite() {
        return {
            msg: 'HELLO WORLD'
        };
    }
}
