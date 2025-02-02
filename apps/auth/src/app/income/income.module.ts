import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Income, IncomeSchema } from '../schemas/income.schema';

@Module({
  controllers: [IncomeController],
  providers: [IncomeService],
  imports: [MongooseModule.forFeature([{name: Income.name, schema: IncomeSchema}])]
})
export class IncomeModule {}
