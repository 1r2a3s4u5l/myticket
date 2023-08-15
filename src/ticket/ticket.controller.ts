import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Chiptalar metodlari")
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: "Chipta qo'shish" })
  @Post("add")
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: "Barcha chiptalarni ko'rish" })
  @Get("all")
  findAll() {
    return this.ticketService.findAll();
  }

  @ApiOperation({ summary: "Chiptalarni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(+id);
  }

  @ApiOperation({ summary: "Chipta ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @ApiOperation({ summary: "Chiptani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(+id);
  }
}
