import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import * as bcrypt from 'bcrypt';
import { Customer } from '../customer/models/customer.model';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Customer) private readonly customerRepo: typeof Customer,
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService,
  ) {}

  async registration(customerDto: CreateCustomerDto) {
    const candidate = await this.customerService.getCustomerByEmail(customerDto.email);
    if (candidate) {
      throw new HttpException(
        'Bunday foydalanuvchi mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(customerDto.password, 7);
    const customer = await this.customerService.create({
      ...customerDto,
      password: hashedPassword,
    });

    const tokens = await this.generateToken(candidate)

    const hashed_token = await bcrypt.hash(tokens.token, 7)

    const updatedAdmin = await this.customerRepo.update(
      { hashed_refresh_token: hashed_token },
      { where: { id: candidate.id }, returning: true }
    )

    return {
      token: tokens.token,
      updatedAdmin
    }
  }
  private async generateToken(customer: Customer) {
    const payload = { email: customer.email, id: customer.id };
    return { token: this.jwtService.sign(payload) };
  }
}
