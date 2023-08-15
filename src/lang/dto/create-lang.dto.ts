import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLangDto {
    @ApiProperty({ example: "Lang", description: "Til" })
    @IsString()
    @IsNotEmpty()
    name: string
}