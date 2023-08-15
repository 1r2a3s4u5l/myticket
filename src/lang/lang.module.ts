import { Module } from '@nestjs/common';
import { LangService } from './lang.service';
import { LangController } from './lang.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lang } from './models/lang.model';

@Module({
  imports: [SequelizeModule.forFeature([Lang])],
  controllers: [LangController],
  providers: [LangService],
  exports: [LangService],
})
export class LangModule {}
