import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStatusBookingDto {
    @ApiProperty({ example: "STATUS", description: "Buyurtma statusi" })
    @IsString()
    @IsNotEmpty()
    name: string
}