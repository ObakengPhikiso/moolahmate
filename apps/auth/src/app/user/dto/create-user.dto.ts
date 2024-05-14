import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe' })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsOptional()
  readonly lastName?: string;

  @ApiProperty({ example: 'New York' })
  @IsString()
  @IsOptional()
  readonly city?: string;

  @ApiProperty({ example: 'USA' })
  @IsString()
  @IsOptional()
  readonly country?: string;

  @ApiProperty({ example: 'Male' })
  @IsString()
  @IsOptional()
  readonly gender?: string;

  @ApiProperty({ example: '1985-05-08' })
  @IsString()
  @IsOptional()
  readonly dateOfBirth?: string;

  @ApiProperty({ example: 'https://example.com/profile.jpg' })
  @IsString()
  @IsOptional()
  readonly profileImageUrl?: string;
}
