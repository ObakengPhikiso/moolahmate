import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeSchema } from '../schemas/income.schema';

@Module({
  controllers: [IncomeController],
  providers: [IncomeService],
  imports: [MongooseModule.forFeature([{name: 'income', schema: IncomeSchema}])]
})
export class IncomeModule {}
