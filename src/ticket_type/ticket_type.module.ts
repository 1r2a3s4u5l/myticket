import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { TicketTypeController } from './ticket_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TicketType } from './models/ticket_type.model';

@Module({
  imports: [SequelizeModule.forFeature([TicketType])],
  controllers: [TicketTypeController],
  providers: [TicketTypeService],
  exports: [TicketTypeService],
})
export class TicketTypeModule {}
