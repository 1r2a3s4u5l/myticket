import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderController } from './gender.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gender } from './models/gender.model';

@Module({
  imports: [SequelizeModule.forFeature([Gender])],
  controllers: [GenderController],
  providers: [GenderService],
  exports: [GenderService],
})
export class GenderModule {}
