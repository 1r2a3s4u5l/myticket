import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { Lang } from './models/lang.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Tillar metodlari")
@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @ApiOperation({ summary: "Til qo'shish" })
  @Post("add")
  create(@Body() createLangDto: CreateLangDto): Promise<Lang> {
    return this.langService.create(createLangDto);
  }

  @ApiOperation({ summary: "Barcha tillarni ko'rish" })
  @Get("all")
  findAll(): Promise<Lang[]> {
    return this.langService.findAll();
  }

  @ApiOperation({ summary: "Tillarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Lang> {
    return this.langService.findOne(+id);
  }

  @ApiOperation({ summary: "Til ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangDto: UpdateLangDto) {
    return this.langService.update(+id, updateLangDto);
  }

  @ApiOperation({ summary: "TIlni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langService.remove(+id);
  }
}
