import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private readonly eventtTypeRepo: typeof EventType) {}

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventtTypeRepo.create(createEventTypeDto);
  }

  findAll() {
    return this.eventtTypeRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.eventtTypeRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventtTypeRepo.update(updateEventTypeDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.eventtTypeRepo.destroy({where: {id}});
  }
}
