import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketTypeDto {
    @ApiProperty({ example: "Type", description: "" })
    name: string
}