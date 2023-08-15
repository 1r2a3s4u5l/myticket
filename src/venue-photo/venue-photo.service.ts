import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue-photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue-photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue-photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto) private venuephotoRepo: typeof VenuePhoto) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto> {
    return this.venuephotoRepo.create(createVenuePhotoDto);
  }

  async findAll(): Promise<VenuePhoto[]> {
    return this.venuephotoRepo.findAll({include: {all: true}});
  }

  async findOne(id: number): Promise<VenuePhoto> {
    return this.venuephotoRepo.findByPk(id, {include: {all: true}});
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuephotoRepo.update(updateVenuePhotoDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
    return this.venuephotoRepo.destroy({where: {id}});
  }
}
