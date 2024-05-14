import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseCategorySchema } from '../schemas/categories.schems';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [MongooseModule.forFeature([{name: 'categories', schema: ExpenseCategorySchema}])]

})
export class CategoriesModule {}
