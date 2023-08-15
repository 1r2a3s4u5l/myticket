import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './models/country.model';

@Module({
  imports: [SequelizeModule.forFeature([Country])],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService]
})
export class CountryModule {}
