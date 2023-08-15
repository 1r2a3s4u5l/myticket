import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './models/seat.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("O'rinlar metodlari")
@Controller('seats')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: "O'rin qo'shish" })
  @Post("add")
  create(@Body() createSeatDto: CreateSeatDto): Promise<Seat> {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({ summary: "Barcha o'rinlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({ summary: "O'rinlarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @ApiOperation({ summary: "O'rin ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @ApiOperation({ summary: "O'rinni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
