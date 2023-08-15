import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Joylar metodlari")
@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: "Joy qo'shish" })
  @Post("add")
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: "Barcha joylarni ko'rish" })
  @Get("all")
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: "Joyni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation({summary: "Joy ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @ApiOperation({ summary: "Joyni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
