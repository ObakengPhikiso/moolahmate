import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Expense extends Document {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  category: string;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'income' })
  monthlyIncome: string; // Reference to MonthlyIncome document
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
