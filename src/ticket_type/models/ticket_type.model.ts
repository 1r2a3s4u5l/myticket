import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";

interface TicketTypeAttr{
    id: number;
    name: string
}

@Table({tableName: "tickettype"})
export class TicketType extends Model<TicketTypeAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number
    
    @Column({
        type: DataType.STRING,
        unique: true
    })
    name: string

    @HasMany(() => Ticket)
    tickets: Ticket[]

}