import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Valyutalar metodlari")
@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @ApiOperation({ summary: "Valyuta qo'shish" })
  @Post("add")
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currencyService.create(createCurrencyDto);
  }

  @ApiOperation({ summary: "Barcha valyutalarni ko'rish" })
  @Get("all")
  findAll() {
    return this.currencyService.findAll();
  }

  @ApiOperation({ summary: "Valyutalarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currencyService.findOne(+id);
  }

  @ApiOperation({ summary: "Valyuta ma'umotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrencyDto: UpdateCurrencyDto) {
    return this.currencyService.update(+id, updateCurrencyDto);
  }

  @ApiOperation({ summary: "Valyutani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currencyService.remove(+id);
  }
}
