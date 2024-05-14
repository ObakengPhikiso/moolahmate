import { Module } from '@nestjs/common';


import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { ExpensesModule } from './expenses/expenses.module';
import { UserModule } from './user/user.module';
import {MongooseModule} from '@nestjs/mongoose'
import { AnalyticsModule } from './analytics/analytics.module';
@Module({
  imports: [
    AuthModule,
    CategoriesModule,
    ExpensesModule,
    AnalyticsModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UserModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@moolahmate.dmvtjxj.mongodb.net/?retryWrites=true&w=majority&appName=Moolahmate`, {
      dbName: 'Moolahmate'
    })
  ],
})
export class AppModule {}
