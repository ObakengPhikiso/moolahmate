import {RegisterUser} from '@moolahmate/shared';
import { IsEmail, IsString, Matches } from 'class-validator';

export class CreateAuthDto implements RegisterUser  {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
        { message: 'invalid password' },
      )
    password: string;
}
