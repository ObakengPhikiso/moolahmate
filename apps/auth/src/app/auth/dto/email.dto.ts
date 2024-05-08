import { IsEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class EmailDTO {
    @ApiProperty({
        example: 'john.doe@gmail.com',
        required: true
        })
    @IsEmail()
    email:string
}