import { IsEmail, IsString } from "class-validator";

export class RefreshToken {

    @IsString()
    refreshToken: string;

    @IsEmail()
    email: string;
}