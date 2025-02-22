import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({ example: '' })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    role: string;
}
