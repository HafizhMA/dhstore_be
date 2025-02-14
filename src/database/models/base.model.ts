import { Model, Column, CreatedAt } from "sequelize-typescript";

export class TimeStamps extends Model {
    @CreatedAt
    @Column({
        field: 'created_at'
    })
    createdAt: Date;

    @CreatedAt
    @Column({
        field: 'updated_at'
    })
    updatedAt: Date;
}