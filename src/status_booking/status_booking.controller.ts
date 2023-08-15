import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusBookingService } from './status_booking.service';
import { CreateStatusBookingDto } from './dto/create-status_booking.dto';
import { UpdateStatusBookingDto } from './dto/update-status_booking.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Buyurtmalar statusi")
@Controller('statusbooking')
export class StatusBookingController {
  constructor(private readonly statusBookingService: StatusBookingService) {}

  @ApiOperation({ summary: "Status qo'shish" })
  @Post("add")
  create(@Body() createStatusBookingDto: CreateStatusBookingDto) {
    return this.statusBookingService.create(createStatusBookingDto);
  }

  @ApiOperation({ summary: "Barcha statuslarni ko'rish" })
  @Get("all")
  findAll() {
    return this.statusBookingService.findAll();
  }

  @ApiOperation({ summary: "Statusni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusBookingService.findOne(+id);
  }

  @ApiOperation({summary: "Status ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusBookingDto: UpdateStatusBookingDto) {
    return this.statusBookingService.update(+id, updateStatusBookingDto);
  }

  @ApiOperation({ summary: "Statusni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusBookingService.remove(+id);
  }
}
