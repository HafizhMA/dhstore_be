import { Model, Column, CreatedAt, UpdatedAt } from "sequelize-typescript";

export class TimeStamps extends Model {
    @CreatedAt
    @Column({
        field: 'created_at'
    })
    createdAt: Date;

    @UpdatedAt
    @Column({
        field: 'updated_at'
    })
    updatedAt: Date;
}