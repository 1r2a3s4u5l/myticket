import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryMethod } from './models/delivery_method.model';

@Injectable()
export class DeliveryMethodService {
  constructor(@InjectModel(DeliveryMethod) private readonly deliveryMethodRepo: typeof DeliveryMethod) {}

  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodRepo.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliveryMethodRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.deliveryMethodRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodRepo.update(updateDeliveryMethodDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.deliveryMethodRepo.destroy({where: {id}});
  }
}
