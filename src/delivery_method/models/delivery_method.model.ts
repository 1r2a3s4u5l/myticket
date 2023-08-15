import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Booking } from "../../booking/models/booking.model"

interface DeliveryMethodAttr{
    id: number
    name: string
}

@Table({tableName: "deliverymethod"})
export class DeliveryMethod extends Model<DeliveryMethodAttr>{

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