import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerAddressDto } from './create-customer_address.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCustomerAddressDto extends PartialType(CreateCustomerAddressDto) {
    @ApiProperty({ example: "100000", description: "Xaridor yashaydigan manzilga tegishli pochta indeksi" })
    post_index?: string;

    @ApiProperty({ example: "Manzil haqida qo'shimcha ma'lumotlar" })
    info?: string
}