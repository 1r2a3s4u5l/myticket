import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SeatType } from './models/seat-type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private readonly seatTypeRepo: typeof SeatType) {}

  async create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType> {
    return this.seatTypeRepo.create(createSeatTypeDto);
  }

  async findAll() {
    return await this.seatTypeRepo.findAll({include: {all: true}});
  }

  async findOne(id: number): Promise<SeatType> {
    return await this.seatTypeRepo.findByPk(id, {include: {all: true}});
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return await this.seatTypeRepo.update(updateSeatTypeDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
    return this.seatTypeRepo.destroy({where: {id}});
  }
}
