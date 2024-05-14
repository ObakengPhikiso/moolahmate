import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserProfile extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  gender: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  profileImageUrl: string;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
