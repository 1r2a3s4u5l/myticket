import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTicketDto {
    @ApiProperty({ example: "1", description: "Joyning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    event_id: number;

    @ApiProperty({ example: "1", description: "O'rinning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    seat_id: number

    @ApiProperty({ example: "1", description: "Valyutaning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    currency_id: number

    @ApiProperty({ example: "1", description: "Chipta narxi" })
    @IsNumber()
    @IsNotEmpty()
    price: number

    @ApiProperty({ example: "1", description: "Komissiya puli" })
    @IsNumber()
    @IsNotEmpty()
    service_fee: number

    @ApiProperty({ example: "1", description: "Chipta statusining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    status_id: number

    @ApiProperty({ example: "1", description: "Chipta turining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    ticket_type_id: number

    @ApiProperty({ example: "1", description: "Rangning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    color_id: number
}