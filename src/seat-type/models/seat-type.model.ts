import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";

interface SeatTypeAttr{
    id: number;
    name: string
}

@Table({tableName: "seatTypes"})
export class SeatType extends Model<SeatTypeAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @Column({
        type: DataType.STRING
    })
    name: string

    @HasMany(() => Seat)
    seat: Seat[]

}
