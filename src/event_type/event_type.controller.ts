import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Tadbir turlari metodlari")
@Controller('eventtype')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "Tadbir turini qo'shish" })
  @Post("add")
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({summary: "Barcha tadbir turlarini ko'rish" })
  @Get("all")
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "Tadbir turlarini ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Tadbir turi ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "Tadbir turini o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventTypeService.remove(+id);
  }
}
