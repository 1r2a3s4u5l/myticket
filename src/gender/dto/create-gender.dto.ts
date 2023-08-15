import { ApiProperty } from "@nestjs/swagger";

export class CreateGenderDto {
    @ApiProperty({ example: "male", description: "Jins" })
    name: string
}