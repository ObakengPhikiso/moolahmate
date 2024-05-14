import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Analytics extends Document {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true, default: 0 })
  totalExpenses: number;

  @Prop({ required: true, default: new Date() })
  createdAt: Date;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);
