import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Booking } from "../../booking/models/booking.model"

interface PaymentMethodAttr{
    id: number
    name: string
}

@Table({tableName: "paymentmethod"})
export class PaymentMethod extends Model<PaymentMethodAttr>{

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

    @HasMany(() => Booking)
    bookings: Booking[]

}