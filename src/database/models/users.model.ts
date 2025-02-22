import { AllowNull, BelongsTo, Column, DefaultScope, DeletedAt, ForeignKey, HasMany, Table } from "sequelize-typescript";
import { TimeStamps } from "./base.model";
import { Role } from "./roles.model";

@DefaultScope(() => ({
    attributes: { exclude: ['deletedAt'] },
    include: [],
}))
@Table({ timestamps: true, tableName: 'users' })
export class User extends TimeStamps {
    @AllowNull(false)
    @ForeignKey(() => Role)
    @Column({ field: 'role_id'})
    roleId: string;

    @AllowNull(true)
    @Column
    name: string

    @AllowNull(true)
    @Column({ field: 'phone_number' })
    phoneNumber: string;

    @AllowNull(true)
    @Column
    email: string

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt?: Date;

    @BelongsTo(() => Role)
    role: Role;
}