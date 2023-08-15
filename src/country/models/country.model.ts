import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.models";

interface CountryAttr{
    id: number;
    name: string
}

@Table({tableName: "country"})
export class Country extends Model<CountryAttr>{

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

    @HasMany(() => CustomerAddress)
    customer_address: CustomerAddress[]

}