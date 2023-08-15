import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: "Foydalanuchini registratsiyadan o'tkazish" })
  @Post('/registration')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.registration(createCustomerDto);
  }
}
