import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class RefreshToken {
    @ApiProperty({
        example: 'eyJhbGciOiJIU...',
        required: true
        })
    @IsString()
    refreshToken: string;

    @ApiProperty({
        example: 'john.doe@gmail.com',
        required: true
        })
    @IsEmail()
    email: string;
}