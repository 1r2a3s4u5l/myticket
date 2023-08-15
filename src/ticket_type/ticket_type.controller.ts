import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Chipta turlari metodlari")
@Controller('tickettype')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @ApiOperation({ summary: "Tur qo'shish" })
  @Post("add")
  create(@Body() createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeService.create(createTicketTypeDto);
  }

  @ApiOperation({ summary: "Barcha turlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.ticketTypeService.findAll();
  }

  @ApiOperation({ summary: "Turni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTypeService.findOne(+id);
  }

  @ApiOperation({summary: "Tur ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeService.update(+id, updateTicketTypeDto);
  }

  @ApiOperation({ summary: "Turni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTypeService.remove(+id);
  }
}
