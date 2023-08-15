import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateEventDto {
    @ApiProperty({ example: "Name", description: "Tadbir nomi" })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: "01-01-2001", description: "Tadbir boshlanadigan sana" })
    @IsDateString()
    @IsNotEmpty()
    start_date: Date

    @ApiProperty({ example: "00:00", description: "Tadbir boshlanadigan vaqt" })
    @IsDateString()
    @IsNotEmpty()
    start_time: Date

    @ApiProperty({ example: "01-01-2001", description: "Tadbir tugaydigan sana" })
    @IsDateString()
    @IsNotEmpty()
    finish_date: Date

    @ApiProperty({ example: "00:00", description: "Tadbir tugaydigan vaqt" })
    @IsDateString()
    @IsNotEmpty()
    finish_time: Date

    @ApiProperty({ example: "Info", description: "Tadbirga oid qo'shimcha ma'lumotlar" })
    @IsString()
    @IsNotEmpty()
    info: string

    @ApiProperty({ example: "1", description: "Tadbir turining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    event_type_id: number

    @ApiProperty({ example: "1", description: "Tadbir yosh kategoriyasining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    human_category_id: number

    @ApiProperty({ example: "1", description: "Tadbirdagi qatnashchilar jinsining ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    gender_id: number

    @ApiProperty({ example: "1", description: "Tadbir o'tkaziladigan joyning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    venue_id: number

    @ApiProperty({ example: "1", description: "Tadbir o'tkaziladigan tilning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    lang_id: number
}