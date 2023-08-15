import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Event } from "../../event/models/event.model";

interface LangAttr{
    id: number,
    name: string
}

@Table({tableName: "langs"})
export class Lang extends Model<LangAttr>{

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

    @HasMany(() => Customer)
    customers: Customer[]

    @HasMany(() => Event)
    events: Event[]

}