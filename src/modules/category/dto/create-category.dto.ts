import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({example: 'sample name'})
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    name: string;
}
