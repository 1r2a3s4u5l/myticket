import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateCurrencyDto {
    @ApiProperty({ example: "CUR", description: "Valyutaning xalqaro kodi" })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: "currency", description: "Valyutaning to'liq nomi" })
    @IsNotEmpty()
    @IsString()
    description: string
}