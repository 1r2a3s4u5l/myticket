import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'FirstName', description: 'Xaridorning ismi ' })
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'LastName', description: 'Xaridorning familiyasi ' })
  @IsString()
  last_name: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Xaridorning telefon raqami ',
  })
  @IsString()
  phone_number: string;

  @ApiProperty({
    example: 'email',
    description: 'Yangi foydalanuvchining elektron pochta manzili',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'Yangi foydalanuvchi uchun beriladigan vaqtinchalik parol',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: '01-01-2001',
    description: "Xaridorning tug'ilgan sanasi ",
  })
  @IsDateString()
  birth_date: Date;

  @ApiProperty({ example: '1', description: 'Xaridor jinsining ID raqami ' })
  @IsNumber()
  gender_id: number;

  @ApiProperty({
    example: '1',
    description: 'Xaridor tushunadigan tilning ID raqami ',
  })
  @IsNumber()
  lang_id: number;
}
