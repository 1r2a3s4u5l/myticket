import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private readonly venueRepo: typeof Venue) {}

  async create(createVenueDto: CreateVenueDto): Promise<Venue> {
    return this.venueRepo.create(createVenueDto)
  }

  async findAll(): Promise<Venue[]> {
    return await this.venueRepo.findAll({include: {all: true}});
  }

  async findOne(id: number): Promise<Venue> {
    return await this.venueRepo.findByPk(id, {include: {all: true}});
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    return await this.venueRepo.update(updateVenueDto, {where: {id}, returning: true})
  }

  async remove(id: number) {
    return this.venueRepo.destroy({where: {id}});
  }
}
