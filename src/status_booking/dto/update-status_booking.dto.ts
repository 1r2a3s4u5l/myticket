import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusBookingDto } from './create-status_booking.dto';

export class UpdateStatusBookingDto extends PartialType(CreateStatusBookingDto) {}
