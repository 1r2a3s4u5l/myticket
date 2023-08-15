import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({ example: "Region", description: "Viloyat yoki Toshkent shahri" })
    @IsString()
    @IsNotEmpty()
    name: string
}