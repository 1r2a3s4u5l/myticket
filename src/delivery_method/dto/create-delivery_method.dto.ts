import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeliveryMethodDto {
    @ApiProperty({ example: "Method", description: "Chiptani olish yo'li" })
    @IsString()
    @IsNotEmpty()
    name: string
}