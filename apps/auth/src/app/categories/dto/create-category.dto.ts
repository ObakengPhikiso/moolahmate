import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Food' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Expenses related to food purchases' })
  @IsString()
  @IsOptional()
  readonly description?: string;
}
