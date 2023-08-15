import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';

@Injectable() 
export class SeatService {
  constructor(@InjectModel(Seat) private readonly seatRepo: typeof Seat) {}

  async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    return this.seatRepo.create(createSeatDto);
  }

  async findAll(): Promise<Seat[]> {
    return await this.seatRepo.findAll({include:{all:true}});
  }

  async findOne(id: number): Promise<Seat> {
    return await this.seatRepo.findByPk(id, {include: {all: true}});
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    return this.seatRepo.update(updateSeatDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
    return await this.seatRepo.destroy({where: {id}});
  }
}