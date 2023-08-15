import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStatusDto {
    @ApiProperty({ example: "STATUS", description: "Chipta statusi" })
    @IsString()
    @IsNotEmpty()
    name: string
}