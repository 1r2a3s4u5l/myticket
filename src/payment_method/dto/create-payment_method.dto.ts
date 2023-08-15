import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @ApiProperty({ example: "Method", description: "To'lov usuli" })
    @IsString()
    @IsNotEmpty()
    name: string
}