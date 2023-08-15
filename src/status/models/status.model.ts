import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";
import { Cart } from "../../cart/models/cart.model";

interface StatusAttr{
    id: number;
    name: string
}

@Table({tableName: "status"})
export class Status extends Model<StatusAttr>{

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