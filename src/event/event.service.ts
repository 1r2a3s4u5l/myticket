import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private readonly eventRepo: typeof Event) {}

  create(createEventDto: CreateEventDto) {
    return this.eventRepo.create(createEventDto);
  }

  findAll() {
    return this.eventRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.eventRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventRepo.update(updateEventDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.eventRepo.destroy({where: {id}});
  }
}
