import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryMethodService } from './delivery_method.service';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Chiptani olish yo'llari ustida amallar")
@Controller('deliverymethod')
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  @ApiOperation({ summary: "Yo'l qo'shish" })
  @Post("add")
  create(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodService.create(createDeliveryMethodDto);
  }

  @ApiOperation({ summary: "Barcha yo'llarni ko'rish" })
  @Get("all")
  findAll() {
    return this.deliveryMethodService.findAll();
  }

  @ApiOperation({ summary: "Yo'llarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryMethodService.findOne(+id);
  }

  @ApiOperation({ summary: "Yo'l ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodService.update(+id, updateDeliveryMethodDto);
  }

  @ApiOperation({ summary: "Yo'lni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryMethodService.remove(+id);
  }
}
