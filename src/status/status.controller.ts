import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Chipta statuslari metodlari")
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiOperation({ summary: "Status qo'shish" })
  @Post("add")
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @ApiOperation({ summary: "Barcha statuslarni ko'rish" })
  @Get("all")
  findAll() {
    return this.statusService.findAll();
  }

  @ApiOperation({ summary: "Statusni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @ApiOperation({summary: "Status ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @ApiOperation({ summary: "Statusni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
