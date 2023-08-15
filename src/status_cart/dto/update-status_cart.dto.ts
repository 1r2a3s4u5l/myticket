import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusCartDto } from './create-status_cart.dto';

export class UpdateStatusCartDto extends PartialType(CreateStatusCartDto) {}
