import { Body, Controller, Delete, Post, Req } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { MovieDto } from "./dto";

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('markAsFavorite')
    markAsFavorite (@Body() dto: MovieDto) {
        console.log(dto);
        
        return this.favoriteService.markAsFavorite();
    }

    @Delete('unmarkAsFavorite')
    unmarkAsFavorite () {
        return this.favoriteService.unmarkAsFavorite();
    }
}
 