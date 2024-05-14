// monthly-income.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateIncomeDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  readonly month: Date;

}
