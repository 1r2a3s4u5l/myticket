import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";
import { Seat } from "../../seat/models/seat.model";
import { Currency } from "../../currency/models/currency.model";
import { Status } from "../../status/models/status.model";
import { TicketType } from "../../ticket_type/models/ticket_type.model";
import { Color } from "../../color/models/color.model";

interface TicketAttr{
    id: number
    event_id: number;
    seat_id: number;
    currency_id: number
    price: number
    service_fee: number
    status_id: number
    ticket_type_id: number
    color_id: number
}

@Table({tableName: "tickets"})
export class Ticket extends Model<TicketAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Event)
    @Column({
        type: DataType.INTEGER,
    })
    event_id: number
    @BelongsTo(() => Event)
    events: Event[]

    @ForeignKey(() => Seat)
    @Column({
        type: DataType.INTEGER,
    })
    seat_id: number
    @BelongsTo(() => Seat)
    seats: Seat[]

    @ForeignKey(() => Currency)
    @Column({
        type: DataType.INTEGER,
    })
    currency_id: number
    @BelongsTo(() => Currency)
    currency: Currency[]

    @Column({
        type: DataType.INTEGER,
    })
    price: number

    @Column({
        type: DataType.INTEGER,
    })
    service_fee: number

    @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER,
    })
    status_id: number
    @BelongsTo(() => Status)
    status: Status[]

    @ForeignKey(() => TicketType)
    @Column({
        type: DataType.INTEGER,
    })
    ticket_type_id: number
    @BelongsTo(() => TicketType)
    ticket_type: TicketType[]

    @ForeignKey(() => Color)
    @Column({
        type: DataType.INTEGER,
    })
    color_id: number
    @BelongsTo(() => Color)
    color: Color[]

}