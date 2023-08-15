import { Injectable } from '@nestjs/common';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TicketType } from './models/ticket_type.model';

@Injectable()
export class TicketTypeService {
  constructor(@InjectModel(TicketType) private readonly ticketTypeRepo: typeof TicketType) {}

  create(createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeRepo.create(createTicketTypeDto);
  }

  findAll() {
    return this.ticketTypeRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.ticketTypeRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeRepo.update(updateTicketTypeDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.ticketTypeRepo.destroy({where: {id}});
  }
}
