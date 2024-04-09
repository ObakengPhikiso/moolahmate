import { User } from "./user";

export interface LoginUser {
    password: string;
    email: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User
}