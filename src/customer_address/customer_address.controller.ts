import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Xaridor manzili ustida amallar")
@Controller('customeraddress')
export class CustomerAddressController {
  constructor(private readonly customerAddressService: CustomerAddressService) {}

  @ApiOperation({ summary: "Manzil qo'shish" })
  @Post("add")
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation({ summary: "Barcha manzillarni ko'rish" })
  @Get("all")
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({ summary: "Manzillarni ID si bo'yicha olish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @ApiOperation({ summary: "Manzillar ma'lumotlari o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @ApiOperation({ summary: "Manzilni o'chirib yuborish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAddressService.remove(+id);
  }
}
