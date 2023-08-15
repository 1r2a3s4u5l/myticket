import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";

interface ColorAttr{
    id: number;
    name: string
}

@Table({tableName: "colors"})
export class Color extends Model<ColorAttr>{

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