import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private readonly customerRepo: typeof Customer) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepo.create(createCustomerDto);
  }

  async getCustomerByEmail(email: string) {
    const admin = await this.customerRepo.findOne({
      where: { email },
      include: {
        all: true
      }
    })
    return admin
  }

  findAll() {
    return this.customerRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.customerRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepo.update(updateCustomerDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.customerRepo.destroy({where: {id}});
  }
}
