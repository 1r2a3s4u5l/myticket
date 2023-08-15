import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region) {}

  async create(createRegionDto: CreateRegionDto): Promise<Region> {
    return this.regionRepo.create(createRegionDto);
  }

  async findAll(): Promise<Region[]> {
    return this.regionRepo.findAll({include: {all: true}});
  }

  async findOne(id: number): Promise<Region> {
    return this.regionRepo.findByPk(id, {include: {all: true}});
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionRepo.update(updateRegionDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
    return this.regionRepo.destroy({where: {id}});
  }
}
