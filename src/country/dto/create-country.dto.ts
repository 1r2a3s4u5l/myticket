import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
    @ApiProperty({ example: "country", description: "Davlat nomi" })
    @IsNotEmpty()
    @IsString()
    name: string
}