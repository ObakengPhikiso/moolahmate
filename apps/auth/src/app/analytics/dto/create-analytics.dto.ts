import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateAnalyticsDto {
  @ApiProperty({ example: 'Food' })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({ example: 250.75 })
  @IsNumber()
  @IsNotEmpty()
  readonly totalExpenses: number;

  @ApiProperty({ example: '2024-05-08T12:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  readonly createdAt: Date;
}
