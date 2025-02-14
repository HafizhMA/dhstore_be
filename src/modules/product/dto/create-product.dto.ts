import { IsBoolean, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsOptional()
    qty: number;

    @IsBoolean()
    @IsOptional()
    isAdditional: boolean;

    @IsBoolean()
    @IsOptional()
    active: boolean;
}
