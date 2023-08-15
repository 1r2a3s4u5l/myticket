import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateHumanCategoryDto {
    @ApiProperty({ example: "Category", description: "Tadbirlarning yosh kategoriyasi" })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: "0", description: "Eng kichik yosh" })
    @IsNumber()
    @IsNotEmpty()
    start_age: number

    @ApiProperty({ example: "0", description: "Eng katta yosh" })
    @IsNumber()
    @IsNotEmpty()
    finish_age: number
}