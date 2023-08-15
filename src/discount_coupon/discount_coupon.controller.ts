import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Promokodlar metodlari")
@Controller('coupon')
export class DiscountCouponController {
  constructor(private readonly discountCouponService: DiscountCouponService) {}

  @ApiOperation({ summary: "Promokod qo'shish" })
  @Post("add")
  create(@Body() createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponService.create(createDiscountCouponDto);
  }

  @ApiOperation({ summary: "Barcha promokodlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.discountCouponService.findAll();
  }

  @ApiOperation({ summary: "Promokodlarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCouponService.findOne(+id);
  }

  @ApiOperation({ summary: "Promokod ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountCouponDto: UpdateDiscountCouponDto) {
    return this.discountCouponService.update(+id, updateDiscountCouponDto);
  }

  @ApiOperation({ summary: "Promokodni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCouponService.remove(+id);
  }
}
