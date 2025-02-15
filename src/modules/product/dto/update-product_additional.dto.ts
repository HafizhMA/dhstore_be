import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class updateProductAdditionalDto {
    @ApiProperty({ example: '' })
    @IsString()
    id: string;

    @ApiProperty({ example: 'name additional'})
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ example: 1})
    @IsNumber()
    @IsOptional()
    price: number;

    @ApiProperty({ example: 1})
    @IsNumber()
    @IsOptional()
    qty: number;
}