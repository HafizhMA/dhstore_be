import { Table, Column, AllowNull, HasMany, DefaultScope, DeletedAt, ForeignKey, BelongsTo } from "sequelize-typescript";
import { TimeStamps } from "./base.model";
import { ProductAdditional } from "./product_additional.model";
import { ProductReview } from "./product_reviews.model";
import { Category } from "./categories.model";

@DefaultScope(() => ({
    attributes: { exclude: ['deletedAt'] },
    include: [],
}))
@Table({ timestamps: true, tableName: 'products' })
export class Product extends TimeStamps {
    @AllowNull(false)
    @ForeignKey(() => Category)
    @Column({ field: 'category_id'})
    categoryId: string;

    @AllowNull(true)
    @Column
    name: string;

    @AllowNull(true)
    @Column
    price: number;

    @AllowNull(true)
    @Column
    qty: number;

    @AllowNull(true)
    @Column
    active: boolean;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt?: Date;

    @HasMany(() => ProductAdditional)
    variants: ProductAdditional[];

    @HasMany(() => ProductReview)
    reviews: ProductReview[];

    @BelongsTo(() => Category)
    category: Category;
}