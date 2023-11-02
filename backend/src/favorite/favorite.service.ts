import { Injectable } from "@nestjs/common";
import { Favorite, Movie } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class FavoriteService {
    constructor(private prisma: PrismaService) {}

    markAsFavorite() {
        return {msg: 'Hello World'}
    };

    unmarkAsFavorite() {
        return {
            msg: 'HELLO WORLD'
        };
    }
}
