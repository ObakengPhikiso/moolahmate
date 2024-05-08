import {RegisterUser} from '@moolahmate/interfaces';
import { IsEmail, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto implements RegisterUser  {
  @ApiProperty({
    example: 'john.doe@gmail.com',
    required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
      example: 'john',
      required: true
      })
    @IsString()
    name: string;

    @ApiProperty({
      example: 'password123',
      required: true
      })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
        { message: 'invalid password' },
      )
    password: string;
}
