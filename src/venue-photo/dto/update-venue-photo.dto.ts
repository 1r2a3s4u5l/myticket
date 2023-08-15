import { PartialType } from '@nestjs/mapped-types';
import { CreateVenuePhotoDto } from './create-venue-photo.dto';

export class UpdateVenuePhotoDto extends PartialType(CreateVenuePhotoDto) {}
