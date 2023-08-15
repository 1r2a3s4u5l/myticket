import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventDto extends PartialType(CreateEventDto) {
    @ApiProperty({ example: "photo.jpg", description: "Tadbirga oid fotolar" })
    photo: string
}