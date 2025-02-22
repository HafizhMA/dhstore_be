import { AllowNull, Column, DefaultScope, DeletedAt, ForeignKey, HasMany, Table } from "sequelize-typescript";
import { TimeStamps } from "./base.model";
import { User } from "./users.model";

@DefaultScope(() => ({
    attributes: { exclude: ['deletedAt'] },
    include: [],
}))
@Table({ timestamps: true, tableName: 'roles' })
export class Role extends TimeStamps {
    @AllowNull(false)
    @Column
    role: string;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt?: Date;

    @HasMany(() => User)
    users: User[]
}