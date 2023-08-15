import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript"
import { Cart } from "../../cart/models/cart.model"

interface StatusCartAttr{
    id: number
    name: string
}

@Table({tableName: "statuscart"})
export class StatusCart extends Model<StatusCartAttr>{

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

    @HasMany(() => Cart)
    cart: Cart[]

}