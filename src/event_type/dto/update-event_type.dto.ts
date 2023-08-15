import { PartialType } from '@nestjs/mapped-types';
import { CreateEventTypeDto } from './create-event_type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventTypeDto extends PartialType(CreateEventTypeDto) {
    @ApiProperty({ example: "type", description: "Bir tadbir turining boshqa bir tadbir turiga bog'liqligi" })
    parent_event_type_id: number
}