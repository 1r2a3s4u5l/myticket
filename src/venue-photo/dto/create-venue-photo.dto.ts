import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVenuePhotoDto {
    @ApiProperty({ example: "1", description: "Joyning ID raqami" })
    @IsNumber()
    @IsNotEmpty()
    venue_id: number;

    @ApiProperty({ example: "site.com/url.jpg", description: "Joy rasmining havolasi" })
    @IsString()
    @IsNotEmpty()
    url: string
}