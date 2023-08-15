import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
    @ApiProperty({ example: "A1", description: "Sektor" })
    @IsString()
    @IsNotEmpty()
    sector: string;

    @ApiProperty({ example: "1", description: "Qator raqami" })
    @IsNumber()
    @IsNotEmpty()
    row_number: number;

    @ApiProperty({ example: "1", description: "O'rin raqami" })
    @IsNumber()
    @IsNotEmpty()
    number: number;

    @ApiProperty({ example: "1", description: "Tadbir o'tkaziladigan joyning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    venue_id: number;

    @ApiProperty({ example: "1", description: "O'rin turi" })
    @IsNumber()
    @IsNotEmpty()
    seat_type_id: number
}
