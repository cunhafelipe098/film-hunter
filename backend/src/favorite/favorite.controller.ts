import { Controller, Delete, Post } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('markAsFavorite')
    markAsFavorite () {
        return this.favoriteService.markAsFavorite();
    }

    @Delete('unmarkAsFavorite')
    unmarkAsFavorite () {
        return this.favoriteService.unmarkAsFavorite();
    }
}
 