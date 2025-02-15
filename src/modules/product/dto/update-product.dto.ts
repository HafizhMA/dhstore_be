import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { updateProductAdditionalDto } from './update-product_additional.dto';

export class UpdateProductDto {
    @ApiProperty({ example: ''})
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ example: 1 })
    @IsNumber()
    @IsOptional()
    price: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    @IsOptional()
    qty: number;

    @ApiProperty({ example: true })
    @IsBoolean()
    @IsOptional()
    active: boolean;

    @ApiProperty({ example: true})
    @IsBoolean()
    @IsOptional()
    isAdditional: boolean;

    @IsArray()
    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => updateProductAdditionalDto)
    @ApiProperty({type: [updateProductAdditionalDto]})
    variants: updateProductAdditionalDto[];
}
