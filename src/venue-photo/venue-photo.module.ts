import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue-photo.service';
import { VenuePhotoController } from './venue-photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue-photo.model';

@Module({
  imports: [SequelizeModule.forFeature([VenuePhoto])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
  exports: [VenuePhotoService],
})
export class VenuePhotoModule {}
