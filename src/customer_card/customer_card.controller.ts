import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Plastik kartalar metodlari")
@Controller('card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: "Karta qo'shish" })
  @Post("add")
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: "Barcha kartalarni ko'rish" })
  @Get("all")
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: "Kartalarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({ summary: "Karta ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: "Kartani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
