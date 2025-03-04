import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { Expense, ExpenseSchema } from '../schemas/expenses.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService],
  imports: [MongooseModule.forFeature([{name: Expense.name, schema: ExpenseSchema}])]

})
export class ExpensesModule {}
