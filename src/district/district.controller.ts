import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Tumanlar metodlari")
@Controller('districts')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: "Tuman qo'shish" })
  @Post("add")
  create(@Body() createDistrictDto: CreateDistrictDto): Promise<District> {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({ summary: "Barcha tumanlarni ko'rish" })
  @Get("all")
  findAll(): Promise<District[]> {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: "Tumanlarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({ summary: "Tuman ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: "Tumanni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
