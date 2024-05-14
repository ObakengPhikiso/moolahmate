import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDateString, IsString, IsNotEmpty } from 'class-validator';

export class CreateExpenseDto {
  @ApiProperty({ example: 50.25 })
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty({ example: '2024-05-08T12:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  readonly date: Date;

  @ApiProperty({ example: 'Food' })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({ example: 'Lunch with friends' })
  @IsString()
  readonly description?: string;
}
