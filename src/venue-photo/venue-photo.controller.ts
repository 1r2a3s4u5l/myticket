import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenuePhotoService } from './venue-photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue-photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue-photo.dto';
import { VenuePhoto } from './models/venue-photo.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Joy rasmlari metodlari")
@Controller('venuephotos')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({ summary: "Rasm qo'shish" })
  @Post("add")
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto> {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }

  @ApiOperation({ summary: "Barcha rasmlarni ko'rish" })
  @Get("all")
  findAll(): Promise<VenuePhoto[]> {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({ summary: "Rasmni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({summary: "Rasm ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @ApiOperation({ summary: "Rasmni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
