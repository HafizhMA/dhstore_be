import { Type } from "class-transformer";
import { IsArray, isArray, IsBoolean, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateProductAdditionalDto } from "./create-product_additional.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({example: 'sample namae'})
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: 10000})
    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    price: number;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsOptional()
    qty: number;

    @ApiProperty({example: true})
    @IsBoolean()
    @IsOptional()
    isAdditional: boolean;

    @ApiProperty({example: true})
    @IsBoolean()
    @IsOptional()
    active: boolean;

    @ApiProperty({example: 'b0da25af-4cd8-4726-ba8d-748d27050eee'})
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    categoryId: string;

    @IsArray()
    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => CreateProductAdditionalDto)
    @ApiProperty({type: [CreateProductAdditionalDto]})
    variants: CreateProductAdditionalDto[];
}
