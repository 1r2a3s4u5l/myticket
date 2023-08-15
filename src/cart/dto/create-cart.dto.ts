import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateCartDto {
    @ApiProperty({ example: "1", description: "Chiptaning ID raqami" })
    @IsNotEmpty()
    @IsNumber()
    ticket_id: number

    @ApiProperty({ example: "1", description: "Mijozning ID raqami" })
    @IsNotEmpty()
    @IsNumber()
    customer_id: number
}