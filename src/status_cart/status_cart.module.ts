import { Module } from '@nestjs/common';
import { StatusCartService } from './status_cart.service';
import { StatusCartController } from './status_cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatusCart } from './models/status_cart.model';

@Module({
  imports: [SequelizeModule.forFeature([StatusCart])],
  controllers: [StatusCartController],
  providers: [StatusCartService],
  exports: [StatusCartService],
})
export class StatusCartModule {}
