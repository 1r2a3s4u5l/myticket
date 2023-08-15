import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Gender } from "../../gender/models/gender.model";
import { Lang } from "../../lang/models/lang.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.models";

interface CustomerAttr{
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string
    email: string;
    hashed_password: string
    birth_date: Date;
    gender_id: number;
    lang_id: number;
    hashed_refresh_token: string
}

@Table({tableName: "customers"})
export class Customer extends Model<CustomerAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number
    
    @Column({
        type: DataType.STRING
    })
    first_name: string
    
    @Column({
        type: DataType.STRING
    })
    last_name: string
    
    @Column({
        type: DataType.STRING
    })
    phone_number: string

    @Column({
        type: DataType.STRING,
        unique: true
    })
    email: string
    
    @Column({
        type: DataType.STRING
    })
    hashed_password: string
    
    @Column({
        type: DataType.DATE
    })
    birth_date: Date
    
    @ForeignKey(() => Gender)
    @Column({
        type: DataType.INTEGER
    })
    gender_id: number
    @BelongsTo(() => Gender)
    gender: Gender[]

    @ForeignKey(() => Lang)
    @Column({
        type: DataType.INTEGER
    })
    lang_id: number
    @BelongsTo(() => Lang)
    lang: Lang[]

    @Column({
        type: DataType.STRING
    })
    hashed_refresh_token: string

    @HasMany(() => CustomerAddress)
    customer_addresses: CustomerAddress[]

}