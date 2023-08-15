import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiscountCouponDto {
    @ApiProperty({ example: "COUPON", description: "Promokod" })
    @IsString()
    @IsNotEmpty()
    name: string
}