import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";

interface CurrencyAttr{
    id: number;
    name: string;
    description: string
}

@Table({tableName: "currencies"})
export class Currency extends Model<CurrencyAttr>{

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

    @Column({
        type: DataType.STRING,
        unique: true
    })
    description: string

    @HasMany(() => Ticket)
    tickets: Ticket[]

}