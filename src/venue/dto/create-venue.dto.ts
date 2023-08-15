import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVenueDto {
    @ApiProperty({ example: "Name", description: "Joy nomi" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "Address", description: "Joy manzili" })
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty({ example: "1.0000, 1.0000", description: "Joy koordinatalari" })
    @IsString()
    @IsNotEmpty()
    location: string;

    @ApiProperty({ example: "+998901234567", description: "Joy telefon raqami" })
    @IsString()
    @IsNotEmpty()
    phone_number: string;

    @ApiProperty({ example: "Type", description: "Joy turi ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    venue_type_id: number;
}