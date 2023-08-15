import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({ example: "Type", description: "Joy turi" })
    @IsString()
    @IsNotEmpty()
    name: string
}