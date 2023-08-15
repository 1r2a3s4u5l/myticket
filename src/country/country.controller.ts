import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Davlatlar metodlari")
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({ summary: "Davlat qo'shish" })
  @Post("add")
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @ApiOperation({ summary: "Barcha davlatlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.countryService.findAll();
  }

  @ApiOperation({ summary: "Davlatlarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @ApiOperation({ summary: "Davlatning ma'lumotini o'zgatirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  }

  @ApiOperation({ summary: "Davlatni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
