import { Injectable } from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Lang } from './models/lang.model';

@Injectable()
export class LangService {
  constructor(@InjectModel(Lang) private readonly langRepo: typeof Lang) {}
  
  async create(createLangDto: CreateLangDto): Promise<Lang> {
    return this.langRepo.create(createLangDto);
  }

  async findAll(): Promise<Lang[]> {
    return this.langRepo.findAll({include: {all: true}});
  }

  async findOne(id: number): Promise<Lang> {
    return this.langRepo.findByPk(id, {include: {all: true}});
  }

  async update(id: number, updateLangDto: UpdateLangDto) {
    return this.langRepo.update(updateLangDto,{where: {id}, returning: true});
  }

  async remove(id: number) {
    return this.langRepo.destroy({where: {id}});
  }
}
