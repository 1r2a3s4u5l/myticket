import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";
import { Country } from "../../country/models/country.model";

interface CustomerAddressAttr{
    id: number;
    customer_id: number;
    name: string;
    country_id: number;
    region_id: number;
    district_id: number;
    street: string;
    house: string;
    flat: string;
    location: string;
    post_index: string;
    info: string
}

@Table({tableName: "customer_address"})
export class CustomerAddress extends Model<CustomerAddressAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER
    })
    customer_id: number
    @BelongsTo(() => Customer)
    customers: Customer[]

    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER
    })
    country_id: number
    @BelongsTo(() => Country)
    countries: Country[]

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

    @Column({
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.STRING
    })
    street: string

    @Column({
        type: DataType.INTEGER
    })
    house: number

    @Column({
        type: DataType.INTEGER
    })
    flat: number

    @Column({
        type: DataType.STRING
    })
    location: string

    @Column({
        type: DataType.STRING
    })
    post_index: string

    @Column({
        type: DataType.STRING
    })
    info: string

}