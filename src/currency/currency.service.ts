import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Currency } from './models/currency.model';

@Injectable()
export class CurrencyService {
  constructor(@InjectModel(Currency) private readonly currencyRepo: typeof Currency) {}

  create(createCurrencyDto: CreateCurrencyDto) {
    console.log(createCurrencyDto);
    
    return this.currencyRepo.create(createCurrencyDto);
  }

  findAll() {
    return this.currencyRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.currencyRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return this.currencyRepo.update(updateCurrencyDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.currencyRepo.destroy({where: {id}});
  }
}
