import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Tadbirlar metodlari")
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: "Tadbir qo'shish" })
  @Post("add")
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({ summary: "Barcha tadbirlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: "Tadbirlarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({ summary: "Tadbir ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: "Tadbirni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
