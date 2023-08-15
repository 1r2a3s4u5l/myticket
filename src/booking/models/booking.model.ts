import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { PaymentMethod } from "../../payment_method/models/payment_method.model"
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model"
import { DiscountCoupon } from "../../discount_coupon/models/discount_coupon.model"
import { StatusBooking } from "../../status_booking/models/status_booking.model"

interface BookingAttr{
    id: number
    cart_id: number
    addedAt: string
    finishedAt: Date
    payment_method_id: number
    delivery_method_id: number
    discount_coupon_id: number
    status_id: number
}

@Table({tableName: "booking"})
export class Booking extends Model<BookingAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.INTEGER
    })
    cart_id: number

    @Column({
        type: DataType.STRING
    })
    addedAt: string

    @Column({
        type: DataType.DATE
    })
    finishedAt: Date

    @ForeignKey(() => PaymentMethod)
    @Column({
        type: DataType.INTEGER
    })
    payment_method_id: number
    @BelongsTo(() => PaymentMethod)
    payment_method: PaymentMethod[]

    @ForeignKey(() => DeliveryMethod)
    @Column({
        type: DataType.INTEGER
    })
    delivery_method_id: number
    @BelongsTo(() => DeliveryMethod)
    delivery_method: DeliveryMethod[]

    @ForeignKey(() => DiscountCoupon)
    @Column({
        type: DataType.INTEGER
    })
    discount_coupon_id: number
    @BelongsTo(() => DiscountCoupon)
    discount_coupon: DiscountCoupon[]

    @ForeignKey(() => StatusBooking)
    @Column({
        type: DataType.INTEGER
    })
    status_id: number
    @BelongsTo(() => StatusBooking)
    status: StatusBooking[]

}