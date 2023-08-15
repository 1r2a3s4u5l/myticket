import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { VenueType } from "../../venue_type/models/venue_type.model";
import { VenuePhoto } from "../../venue-photo/models/venue-photo.model";
import { Event } from "../../event/models/event.model";

interface VenueAttr{
    id: number;
    name: string;
    address: string;
    location: string;
    site: string;
    phone_number: string;
    venue_type_id: number;
    schema: string;
    region_id: number;
    district_id: number
}

@Table({tableName: "venues"})
export class Venue extends Model<VenueAttr,Venue>{

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true
    })
    name: string

    @Column({
        type: DataType.STRING
    })
    address: string

    @Column({
        type: DataType.STRING
    })
    location: string

    @Column({
        type: DataType.STRING
    })
    site: string

    @Column({
        type: DataType.STRING
    })
    phone_number: string

    @ForeignKey(() => VenueType)
    @Column({
        type: DataType.INTEGER
    })
    venue_type_id: number
    @BelongsTo(() => VenueType)
    venue_types: VenueType[]

    @Column({
        type: DataType.STRING
    })
    schema: string

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER
    })
    region_id: number
    @BelongsTo(() => Region)
    regions: Region[]

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER
    })
    district_id: number
    @BelongsTo(() => District)
    districts: District[]

    @HasMany(() => Seat)
    seat: Seat[]

    @HasMany(() => VenuePhoto)
    venue_photos: VenuePhoto[]

    @HasMany(() => Event)
    events: Event[]

}
