import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductAdditionalDto {
    @ApiProperty({ example: 'sample name additional'})
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsOptional()
    qty: string;

    @ApiProperty({ example: 1 })
    @IsNumber()
    @IsOptional()
    price: number
}