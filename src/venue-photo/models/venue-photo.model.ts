import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";

interface VenuePhotoAttr{
    id: number;
    venue_id: number;
    url: string
}

@Table({tableName: "venuephoto"})
export class VenuePhoto extends Model<VenuePhoto>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER
    })
    venue_id: number
    @BelongsTo(() => Venue)
    venue: Venue[]


    @Column({
        type: DataType.STRING,
        unique: true
    })
    url: string

}