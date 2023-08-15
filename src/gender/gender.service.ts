import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Gender } from './models/gender.model';

@Injectable()
export class GenderService {
  constructor(@InjectModel(Gender) private readonly genderRepo: typeof Gender) {}

  async create(createGenderDto: CreateGenderDto): Promise<Gender> {
    return this.genderRepo.create(createGenderDto);
  }

  async findAll(): Promise<Gender[]> {
    return this.genderRepo.findAll({include: {all: true}});
  }

  async findOne(id: number): Promise<Gender> {
    return this.genderRepo.findByPk(id);
  }

  async update(id: number, updateGenderDto: UpdateGenderDto) {
    return this.genderRepo.update(updateGenderDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
    return this.genderRepo.destroy({where: {id}});
  }
}
