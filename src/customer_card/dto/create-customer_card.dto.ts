import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerCardDto {
    @ApiProperty({ example: "1", description: "Xaridorning ID raqami" })
    @IsString()
    @IsNotEmpty()
    customer_id: number;

    @ApiProperty({ example: "NameOfCard", description: "Kartaning ixtiyoriy nomi" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "+998901234567", description: "Karta ulangan telefon raqami" })
    @IsString()
    @IsNotEmpty()
    phone_number: string;

    @ApiProperty({ example: "1234567890123456", description: "Kartaning 16 xonali raqami" })
    @IsNumber()
    @IsNotEmpty()
    number: bigint;

    @ApiProperty({ example: "01", description: "Karta yaroqlilik muddatidagi oy raqami" })
    @IsString()
    @IsNotEmpty()
    month: string;

    @ApiProperty({ example: "22", description: "Karta yaroqlilik muddatidagi yil raqami" })
    year: string
}