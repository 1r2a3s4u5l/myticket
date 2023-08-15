import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Savat metodlari")
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Savatga chipta qo'shish" })
  @Post("add")
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: "Savatdagi barcha chiptalarni ko'rish" })
  @Get("all")
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "Savatdagi chiptalarni ID bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: "Savatdagi chipta ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({ summary: "Savatdagi chiptani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
