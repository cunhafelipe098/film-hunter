import { Injectable } from "@nestjs/common";
import { Favorite, Movie } from '@prisma/client';

@Injectable({})
export class FavoriteService {
    markAsFavorite() {
        return {msg: 'Hello World'}
    };

    unmarkAsFavorite() {
        return {
            msg: 'HELLO WORLD'
        };
    }
}
