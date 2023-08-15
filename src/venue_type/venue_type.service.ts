import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private readonly venueTypeRepo: typeof VenueType) {}

  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeRepo.create(createVenueTypeDto)
  }

  findAll() {
    return this.venueTypeRepo.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.venueTypeRepo.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeRepo.update(updateVenueTypeDto, {where :{id}, returning: true});
  }

  remove(id: number) {
    return this.venueTypeRepo.destroy({where: {id}});
  }
}
