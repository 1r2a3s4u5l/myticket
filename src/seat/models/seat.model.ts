import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { SeatType } from "../../seat-type/models/seat-type.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface SeatAttr{
    id: number,
    sector: string,
    row_number: number,
    number: number,
    venue_id: number,
    seat_type_id: number,
    location_in_schema: string
}

@Table({tableName: "seats"})
export class Seat extends Model<SeatAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    sector: string

    @Column({
        type: DataType.SMALLINT
    })
    row_number: number

    @Column({
        type: DataType.SMALLINT
    })
    number: number

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.SMALLINT
    })
    venue_id: number
    @BelongsTo(() => Venue)
    venue: Venue[]

    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.SMALLINT
    })
    seat_type_id: number
    @BelongsTo(() => SeatType)
    seatType: SeatType[]

    @Column({
       type: DataType.STRING
    })
    location_in_schema: string

    @HasMany(() => Ticket)
    tickets: Ticket[]

}