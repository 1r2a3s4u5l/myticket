import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Joy turlari metodlari")
@Controller('venuetype')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: "Tur qo'shish" })
  @Post("add")
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: "Barcha turlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({ summary: "Turni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @ApiOperation({summary: "Tur ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @ApiOperation({ summary: "Turni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTypeService.remove(+id);
  }
}
