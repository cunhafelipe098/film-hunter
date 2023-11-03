import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MovieDto {
    
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    plot: string;
    
    @IsString()
    @IsNotEmpty()
    poster: string;
    
    @IsString()
    @IsNotEmpty()
    actors: string;
    
    @IsNumber()
    @IsNotEmpty()
    rating: number;
    
    @IsString()
    @IsNotEmpty()
    awards: string;
}