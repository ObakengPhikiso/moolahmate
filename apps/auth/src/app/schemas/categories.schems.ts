import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ExpenseCategory extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const ExpenseCategorySchema = SchemaFactory.createForClass(ExpenseCategory);
