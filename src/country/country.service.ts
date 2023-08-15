import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './models/country.model';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private readonly countryRepo: typeof Country) {}

  create(createCountryDto: CreateCountryDto) {
    return this.countryRepo.create(createCountryDto);
  }

  findAll() {
    return this.countryRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.countryRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepo.update(updateCountryDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.countryRepo.destroy({where: {id}});
  }
}
