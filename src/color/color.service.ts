import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Color } from './models/color.model';

@Injectable()
export class ColorService {
  constructor(@InjectModel(Color) private readonly colorRepo: typeof Color) {}

  create(createColorDto: CreateColorDto) {
    return this.colorRepo.create(createColorDto);
  }

  findAll() {
    return this.colorRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.colorRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateColorDto: UpdateColorDto) {
    return this.colorRepo.update(updateColorDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.colorRepo.destroy({where: {id}});
  }
}
