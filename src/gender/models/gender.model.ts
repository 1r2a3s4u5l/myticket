import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Event } from "../../event/models/event.model";

interface GenderAttr{
    id: number,
    name: string
}

@Table({tableName: "gender"})
export class Gender extends Model<GenderAttr>{

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