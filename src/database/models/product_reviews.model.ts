import { AllowNull, BelongsTo, Column, DefaultScope, DeletedAt, ForeignKey, Table } from "sequelize-typescript";
import { TimeStamps } from "./base.model";
import { Product } from "./product.model";

@DefaultScope(() => ({
    attributes: { exclude: ['deletedAt'] },
    include: [],
}))
@Table({timestamps: true, tableName: 'product_reviews'})
export class ProductReview extends TimeStamps {
    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column({field: 'product_id'})
    productId: string;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(true)
    @Column
    description: string;

    @AllowNull(false)
    @Column
    rating: number;
    
    @DeletedAt
    deletedAt?: Date;

    @BelongsTo(() => Product)
    product: Product;
}

