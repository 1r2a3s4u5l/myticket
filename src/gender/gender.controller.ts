import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './models/gender.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Jinslar metodlari")
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @ApiOperation({ summary: "Jins qo'shish" })
  @Post("add")
  create(@Body() createGenderDto: CreateGenderDto): Promise<Gender> {
    return this.genderService.create(createGenderDto);
  }

  @ApiOperation({ summary: "Barcha jinslarni ko'rish" })
  @Get("all")
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @ApiOperation({ summary: "Jinslarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Gender> {
    return this.genderService.findOne(+id);
  }

  @ApiOperation({ summary: "Jins ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(+id, updateGenderDto);
  }

  @ApiOperation({ summary: "Jinsini o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genderService.remove(+id);
  }
}
