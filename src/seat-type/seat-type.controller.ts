import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatTypeService } from './seat-type.service';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat-type.dto';
import { SeatType } from './models/seat-type.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("O'rin turlari metodlari")
@Controller('seattypes')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({ summary: "Tur qo'shish" })
  @Post("add")
  create(@Body() createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType> {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @ApiOperation({ summary: "Barcha turlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.seatTypeService.findAll();
  }

  @ApiOperation({ summary: "Turni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Tur ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeService.update(+id, updateSeatTypeDto);
  }

  @ApiOperation({ summary: "Turni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatTypeService.remove(+id);
  }
}
