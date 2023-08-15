import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateColorDto {
    @ApiProperty({ example: "color", description: "Rang nomi" })
    @IsNotEmpty()
    @IsString()
    name: string
}