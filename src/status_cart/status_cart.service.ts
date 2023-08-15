import { Injectable } from '@nestjs/common';
import { CreateStatusCartDto } from './dto/create-status_cart.dto';
import { UpdateStatusCartDto } from './dto/update-status_cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StatusCart } from './models/status_cart.model';

@Injectable()
export class StatusCartService {
  constructor(@InjectModel(StatusCart) private readonly statusCartRepo: typeof StatusCart) {}

  create(createStatusCartDto: CreateStatusCartDto) {
    return this.statusCartRepo.create(createStatusCartDto);
  }

  findAll() {
    return this.statusCartRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.statusCartRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateStatusCartDto: UpdateStatusCartDto) {
    return this.statusCartRepo.update(updateStatusCartDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.statusCartRepo.destroy({where: {id}});
  }
}
