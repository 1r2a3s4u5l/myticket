import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerAddressDto {
    @ApiProperty({ example: "1", description: "Xaridorning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    customer_id: number;

    @ApiProperty({ example: "Name", description: "Xaridor manzilining to'liq nomi" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "1", description: "Xaridor davlatining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    country_id: number;

    @ApiProperty({ example: "1", description: "Xaridor yashaydigan viloyat (yoki Toshkent shahri) ning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    region_id: number;

    @ApiProperty({ example: "1", description: "Xaridor yashaydigan tumanning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    district_id: number;

    @ApiProperty({ example: "Street", description: "Xaridor yashaydigan ko'cha nomi" })
    @IsString()
    @IsNotEmpty()
    street: string;

    @ApiProperty({ example: "1 yoki 1A", description: "Xaridor yashaydigan uy raqami" })
    @IsString()
    @IsNotEmpty()
    house: string;

    @ApiProperty({ example: "1 yoki 1A", description: "Xaridor yashaydigan xonadon raqami (agar hovli uyda yashasa bo'sh qoladi)" })
    flat: string;

    @ApiProperty({ example: "1.00000, 1.00000", description: "Xaridor yashaydigan manzilning koordinatalari" })
    @IsString()
    @IsNotEmpty()
    location: string
}