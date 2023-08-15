import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";

interface VenueTypeAttr{
    id: number;
    name: string
}

@Table({tableName: "venuetype"})
export class VenueType extends Model<VenueTypeAttr>{

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

    @HasMany(() => Venue)
    venues: Venue[]

}