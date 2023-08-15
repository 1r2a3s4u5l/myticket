import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Status } from "../../status/models/status.model";
import { StatusCart } from "../../status_cart/models/status_cart.model";

interface CartAttr{
    id: number
    ticket_id: number
    customer_id: number
    addedAt: string
    finishesAt: string
    status_id: number
}

@Table({tableName: "cart"})
export class Cart extends Model<CartAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.INTEGER
    })
    ticket_id: number

    @Column({
        type: DataType.INTEGER
    })
    customer_id: number

    @Column({
        type: DataType.STRING
    })
    addedAt: string

    @Column({
        type: DataType.STRING
    })
    finishesAt: string

    @ForeignKey(() => StatusCart)
    @Column({
        type: DataType.INTEGER
    })
    status_id: number
    @BelongsTo(() => StatusCart)
    status: StatusCart[]

}