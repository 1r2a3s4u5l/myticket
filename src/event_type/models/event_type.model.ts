import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Event } from "../../event/models/event.model"

interface EventTypeAttr{
    id: number
    name: string
    parent_event_type_id: number
}

@Table({tableName: "eventtype"})
export class EventType extends Model<EventTypeAttr>{

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

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER
    })
    parent_event_type_id: number
    @BelongsTo(() => EventType)
    parent_event_type: EventType[]

    @HasMany(() => EventType)
    event_type: EventType[]

    @HasMany(() => Event)
    events: Event[]

}