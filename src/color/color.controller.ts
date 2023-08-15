import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Ranglar metodlari")
@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @ApiOperation({ summary: "Rang qo'shish" })
  @Post("add")
  create(@Body() createColorDto: CreateColorDto) {
    return this.colorService.create(createColorDto);
  }

  @ApiOperation({ summary: "Barcha ranglarni ko'rish" })
  @Get("all")
  findAll() {
    return this.colorService.findAll();
  }

  @ApiOperation({ summary: "Ranglarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorService.findOne(+id);
  }

  @ApiOperation({ summary: "Ranglar ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
    return this.colorService.update(+id, updateColorDto);
  }

  @ApiOperation({ summary: "Rangni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colorService.remove(+id);
  }
}
