import { Body, Controller, Delete, Post } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { MovieDto } from "./dto";

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('markAsFavorite')
    markAsFavorite (@Body() dto: MovieDto) {
        return this.favoriteService.markAsFavorite(dto);
    }

    @Delete('unmarkAsFavorite')
    unmarkAsFavorite () {
        return this.favoriteService.unmarkAsFavorite();
    }
}
 