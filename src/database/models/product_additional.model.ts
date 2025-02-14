import { Table, Column, AllowNull, BelongsTo, ForeignKey, DefaultScope, DeletedAt } from "sequelize-typescript";
import { TimeStamps } from "./base.model";
import { Product } from "./product.model";

@DefaultScope(() => ({
    attributes: { exclude: ['deletedAt'] },
    include: [],
}))
@Table({ timestamps: true, tableName: 'product_additionals' })
export class ProductAdditional extends TimeStamps {
    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column({ field: 'product_id' })
    productId: string;

    @AllowNull(true)
    @Column
    name: string;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt?: Date;

    @BelongsTo(() => Product)
    product: Product;
}