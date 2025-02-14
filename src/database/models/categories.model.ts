// import { AllowNull, Column, DefaultScope, HasMany, Table } from "sequelize-typescript";
// import { TimeStamps } from "./base.model";
// import { Product } from "./product.model";

// @DefaultScope(() => ({
//     attributes: { exclude: ['deleted_at'] },
//     include: []
// }))
// @Table({timestamps: true, tableName: 'categories'})
// export class Category extends TimeStamps {
//     @AllowNull(false)
//     @Column
//     name: string

//     @HasMany(() => Product)
//     products: Product[];
// }