import { Injectable } from '@nestjs/common';
import { CreateStatusBookingDto } from './dto/create-status_booking.dto';
import { UpdateStatusBookingDto } from './dto/update-status_booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StatusBooking } from './models/status_booking.model';

@Injectable()
export class StatusBookingService {
  constructor(@InjectModel(StatusBooking) private readonly statusBookingRepo: typeof StatusBooking) {}

  create(createStatusBookingDto: CreateStatusBookingDto) {
    return this.statusBookingRepo.create(createStatusBookingDto);
  }

  findAll() {
    return this.statusBookingRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.statusBookingRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateStatusBookingDto: UpdateStatusBookingDto) {
    return this.statusBookingRepo.update(updateStatusBookingDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.statusBookingRepo.destroy({where: {id}});
  }
}
