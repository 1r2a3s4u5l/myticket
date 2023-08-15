import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";

interface CustomerCardAttr{
    id: number;
    customer_id: number;
    name: string;
    phone_number: string;
    number: bigint;
    month: string;
    year: string;
    is_active: boolean;
    is_main: boolean
}

@Table({tableName: "customercards"})
export class CustomerCard extends Model<CustomerCardAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER
    })
    customer_id: number
    @BelongsTo(() => Customer)
    customers: Customer[]

    @Column({
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.STRING
    })
    phone_number: string

    @Column({
        type: DataType.BIGINT,
        unique: true,
    })
    number: string

    @Column({
        type: DataType.STRING
    })
    month: string

    @Column({
        type: DataType.STRING
    })
    year: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    is_active: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_main: boolean

}