import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeatTypeDto {
    @ApiProperty({ example: "Type", description: "O'rin turi" })
    @IsString()
    @IsNotEmpty()
    name: string
}
