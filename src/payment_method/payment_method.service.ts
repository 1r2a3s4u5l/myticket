import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './models/payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(@InjectModel(PaymentMethod) private readonly paymentMethodRepo: typeof PaymentMethod) {}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodRepo.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paymentMethodRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.paymentMethodRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodRepo.update(updatePaymentMethodDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.paymentMethodRepo.destroy({where: {id}});
  }
}
