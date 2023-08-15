import { ApiProperty } from "@nestjs/swagger";

export class CreateDistrictDto {
    @ApiProperty({ example: "District", description: "Tuman nomi" })
    name: string
}