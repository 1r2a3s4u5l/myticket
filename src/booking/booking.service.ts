import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private readonly bookingRepo: typeof Booking) {}

  async create(createBookingDto: CreateBookingDto) {
    let res = this.bookingRepo.create(createBookingDto);

    let a = String(new Date()).split(" ")
    let addedAt = a[1] + " " + a[2] + " " + a[3] + " " + a[4]

    let update = this.bookingRepo.update({addedAt}, {where: {id: (await res).dataValues.id}, returning: true})

    return update
  }

  findAll() {
    return this.bookingRepo.findAll({include:{all: true}});
  }

  findOne(id: number) {
    return this.bookingRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepo.update(updateBookingDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.bookingRepo.destroy({where: {id}});
  }
}
