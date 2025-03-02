// monthly-income.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Income extends Document {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  month: Date;

}

export const IncomeSchema = SchemaFactory.createForClass(Income);
