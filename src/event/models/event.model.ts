import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { EventType } from "../../event_type/models/event_type.model"
import { HumanCategory } from "../../human_category/models/human_category.model"
import { Gender } from "../../gender/models/gender.model"
import { Venue } from "../../venue/models/venue.model"
import { Lang } from "../../lang/models/lang.model"
import { Ticket } from "../../ticket/models/ticket.model"

interface EventAttr{
    id: number
    name: string
    photo: string
    start_date: Date
    start_time: Date
    finish_date: Date
    finish_time: Date
    info: string
    event_type_id: number
    human_category_id: number
    gender_id: number
    venue_id: number
    lang_id: number
    release_date: Date
}

@Table({tableName: "events"})
export class Event extends Model<EventAttr>{

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

    @Column({
        type: DataType.STRING
    })
    photo: string

    @Column({
        type: DataType.DATE
    })
    start_date: Date

    @Column({
        type: DataType.TIME
    })
    start_time: Date

    @Column({
        type: DataType.DATE
    })
    finish_date: Date

    @Column({
        type: DataType.TIME
    })
    finish_time: Date

    @Column({
        type: DataType.STRING
    })
    info: string

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER
    })
    event_type_id: number
    @BelongsTo(() => EventType)
    event_type: EventType[]

    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.INTEGER
    })
    human_category_id: number
    @BelongsTo(() => HumanCategory)
    human_category: HumanCategory[]

    @ForeignKey(() => Gender)
    @Column({
        type: DataType.INTEGER
    })
    gender_id: number
    @BelongsTo(() => Gender)
    gender: Gender[]

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER
    })
    venue_id: number
    @BelongsTo(() => Venue)
    venues: Venue[]

    @ForeignKey(() => Lang)
    @Column({
        type: DataType.INTEGER
    })
    lang_id: number
    @BelongsTo(() => Lang)
    lang: Lang[]

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    release_date: Date

    @HasMany(() => Ticket)
    tickets: Ticket[]
    
}