import { Module } from '@nestjs/common';
import { SeatTypeService } from './seat-type.service';
import { SeatTypeController } from './seat-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeatType } from './models/seat-type.model';

@Module({
  imports: [SequelizeModule.forFeature([SeatType])],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
  exports: [SeatTypeService],
})
export class SeatTypeModule {}
