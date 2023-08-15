import { PartialType } from '@nestjs/mapped-types';
import { CreateSeatDto } from './create-seat.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSeatDto extends PartialType(CreateSeatDto) {
    @ApiProperty({ example: "______", description: "O'rinning sxemadagi joylashuvi" })
    location_in_schema: string
}
