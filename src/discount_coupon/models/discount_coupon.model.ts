import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Booking } from "../../booking/models/booking.model"

interface DiscountCouponAttr{
    id: number
    name: string
}

@Table({tableName: "discountcoupon"})
export class DiscountCoupon extends Model<DiscountCouponAttr>{

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