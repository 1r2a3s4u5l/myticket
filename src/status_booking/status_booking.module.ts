import { Module } from '@nestjs/common';
import { StatusBookingService } from './status_booking.service';
import { StatusBookingController } from './status_booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatusBooking } from './models/status_booking.model';

@Module({
  imports: [SequelizeModule.forFeature([StatusBooking])],
  controllers: [StatusBookingController],
  providers: [StatusBookingService],
  exports: [StatusBookingService],
})
export class StatusBookingModule {}