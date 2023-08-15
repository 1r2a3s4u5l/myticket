import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Buyurtmalar")
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: "Buyurtma qo'shish" })
  @Post("add")
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: "Buyurtmalarni ko'rish" })
  @Get("all")
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: "Buyurtmalarni ID boyicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: "Buyurtmalarga o'zgartirish kiritish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({ summary: "Buyurtmani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
