import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerCardDto } from './create-customer_card.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateCustomerCardDto extends PartialType(CreateCustomerCardDto) {
    @ApiProperty({ example: "true", description: "Kartaning faolligi/faol emasligi" })
    is_active: boolean;

    @ApiProperty({ example: "true", description: "Kartaning asosiyligi/asosiy emasligi" })
    is_main: boolean
}