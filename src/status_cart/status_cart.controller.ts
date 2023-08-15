import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusCartService } from './status_cart.service';
import { CreateStatusCartDto } from './dto/create-status_cart.dto';
import { UpdateStatusCartDto } from './dto/update-status_cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Savat statusi")
@Controller('statuscart')
export class StatusCartController {
  constructor(private readonly statusCartService: StatusCartService) {}

  @ApiOperation({ summary: "Status qo'shish" })
  @Post("add")
  create(@Body() createStatusCartDto: CreateStatusCartDto) {
    return this.statusCartService.create(createStatusCartDto);
  }

  @ApiOperation({ summary: "Barcha statuslarni ko'rish" })
  @Get("all")
  findAll() {
    return this.statusCartService.findAll();
  }

  @ApiOperation({ summary: "Statusni ID si bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusCartService.findOne(+id);
  }

  @ApiOperation({summary: "Status ma'lumotini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusCartDto: UpdateStatusCartDto) {
    return this.statusCartService.update(+id, updateStatusCartDto);
  }

  @ApiOperation({summary: "Status ma'lumotini o'zgartirish" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusCartService.remove(+id);
  }
}
