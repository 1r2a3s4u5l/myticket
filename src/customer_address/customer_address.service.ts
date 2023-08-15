import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.models';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAddress) private readonly customerAddressRepo: typeof CustomerAddress) {}

  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressRepo.create(createCustomerAddressDto);
  }

  findAll() {
    return this.customerAddressRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.customerAddressRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressRepo.update(updateCustomerAddressDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.customerAddressRepo.destroy({where: {id}});
  }
}
