import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueDto } from './create-venue.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateVenueDto extends PartialType(CreateVenueDto) {
    @ApiProperty({ example: "schema", description: "Joy sxemasi" })
    schema?: string;

    @ApiProperty({ example: "site.com", description: "Joy web-sayti" })
    site?: string

    @ApiProperty({ example: "1", description: "Joy joylashgan viloyat ID raqami" })
    region_id?: number;

    @ApiProperty({ example: "1", description: "Joy joylashgan tuman ID raqami" })
    district_id?: number
    
    @ApiProperty({ example: "1", description: "Joy turining viloyat ID raqami" })
    venue_type_id?: number;
}
