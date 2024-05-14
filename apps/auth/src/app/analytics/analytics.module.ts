import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticsSchema } from '../schemas/analytics.schema';

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  imports: [MongooseModule.forFeature([{name: 'analytics', schema: AnalyticsSchema}])]
})
export class AnalyticsModule {}
