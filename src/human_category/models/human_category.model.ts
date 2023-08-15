import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface HumanCategoryAttr{
    id: number
    name: string;
    start_age: number;
    finish_age: number
}

@Table({tableName: "humancategory"})
export class HumanCategory extends Model<HumanCategoryAttr> {

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

    @Column({
        type: DataType.SMALLINT
    })
    start_age: number

    @Column({
        type: DataType.SMALLINT
    })
    finish_age: number

    @HasMany(() => Event)
    events: Event[]

}