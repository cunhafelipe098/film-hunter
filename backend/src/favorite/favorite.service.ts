import { ForbiddenException, Injectable } from "@nestjs/common";
import { Favorite, Movie } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
import { MovieDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class FavoriteService {
    constructor(private prisma: PrismaService) {}

    async markAsFavorite(dto: MovieDto) {

        try {
            const movie = await this.prisma.movie.create({
                data: { ...dto }
            });
            const favorite = await this.prisma.favorite.create({
                data:{
                     movieId: movie.id   
                }
            });
            return {movie, favorite};
        } catch (error) {
            if( error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException(
                        'Credentials taken',
                    );
                }
                throw error;
            }
        }
    };

    unmarkAsFavorite() {
        return {
            msg: 'HELLO WORLD'
        };
    }
}
