import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateBookingDto {
    @ApiProperty({ example: "1", description: "Savatdagi chiptaning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    cart_id: number

    @ApiProperty({ example: "1", description: "To'lov usulining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    payment_method_id: number
    
    @ApiProperty({ example: "1", description: "Yetkazish usulining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    delivery_method_id: number
    
    @ApiProperty({ example: "1", description: "Chegirmali promokod ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    discount_coupon_id: number
    
    @ApiProperty({ example: "1", description: "Status ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    status_id: number
}