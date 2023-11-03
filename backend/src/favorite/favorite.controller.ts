import { Body, Controller, Delete, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { MovieDto } from "./dto";

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {}

    @Post('')
    markAsFavorite (@Body() dto: MovieDto) {
        return this.favoriteService.markAsFavorite(dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    unmarkAsFavorite (@Param('id', ParseIntPipe) favoriteId: number) {
        return this.favoriteService.deleteFavoriteById(favoriteId);
    }
}
 