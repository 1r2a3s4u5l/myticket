import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District){}

  async create(createDistrictDto: CreateDistrictDto): Promise<District> {
    return this.districtRepo.create(createDistrictDto)
  }

  async findAll(): Promise<District[]> {
    return await this.districtRepo.findAll();
  }

  async findOne(id: number): Promise<District> {
    return await this.districtRepo.findByPk(id);
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.districtRepo.update(updateDistrictDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
    return this.districtRepo.destroy({where: {id}});
  }
}
