import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Kategoriyalar metodlari")
@Controller('humancategory')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: "Kategoriya qo'shish" })
  @Post("add")
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({ summary: "Barcha kategoriyalarni ko'rish" })
  @Get("all")
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({ summary: "Kategoriyalarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: "Kategoriya ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryService.update(+id, updateHumanCategoryDto);
  }

  @ApiOperation({ summary: "Kategoriyani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humanCategoryService.remove(+id);
  }
}
