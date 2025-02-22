import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: '' })
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: '' })
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: '' })
    @IsString()
    @IsOptional()
    email: string;

    @ApiProperty({ example: '' })
    @IsString()
    @IsOptional()
    phoneNumber: string
}
